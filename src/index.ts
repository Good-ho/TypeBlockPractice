import * as CryptoJS from "crypto-js";

class Block{
    public index:number;
    public hash:string;
    public preHash:string;
    public data:string;
    public timestamp:number;

    static calculBlockHash = (index:number, preHash:string, timestamp:number, data:string):string => {
        return CryptoJS.SHA256(index+preHash+timestamp+data).toString();
    }

    constructor(index:number,
        hash:string,
        preHash:string,
        data:string,
        timestamp:number
    ){
        this.index = index;
        this.hash = hash;
        this.preHash = preHash;
        this.data = data;
        this.timestamp = timestamp;            
    }
}

const genesisBlock:Block = new Block(0, "202020", "", "hello", 123456);

let blockChain:Block[] = [genesisBlock];

const getBlockChain = () : Block[] =>{
    return blockChain;
}

const getLatestBlock = ():Block => {
    return blockChain[blockChain.length-1];
}

const getNewTimeStamp =():number => {
    return Math.round(new Date().getTime()/1000);
}

const createNewBlock = (data:string):Block =>{
    const previosBlock:Block = getLatestBlock();
    const newIndex:number = previosBlock.index+1;
    const newTimeStamp:number = getNewTimeStamp();
    const newHash:string = Block.calculBlockHash(newIndex, previosBlock.hash, newTimeStamp, data);

    const newBlock = new Block(newIndex, newHash, previosBlock.hash, data, newTimeStamp);
    addBlock(newBlock);
    return newBlock;
}

const getHashforBlock = (aBlock: Block): string =>
  Block.calculBlockHash(
    aBlock.index,
    aBlock.preHash,
    aBlock.timestamp,
    aBlock.data
  );

const isBlockValid = (candidateBlock:Block, previosBlock:Block):boolean => {
    if(previosBlock.index + 1 !== candidateBlock.index) {
        return false;
    } else if(previosBlock.hash !== candidateBlock.preHash) {
        return false;
    } else if(candidateBlock.hash !== getHashforBlock(candidateBlock)){
        return false;
    } else {
        return true;
    }
}

const addBlock = (candidateBlock:Block):void => {
    if(isBlockValid(candidateBlock, getLatestBlock())){
        blockChain.push(candidateBlock);
    }
}

createNewBlock("first");
createNewBlock("second");
createNewBlock("third");
createNewBlock("fourth");

console.log(blockChain);

export {}