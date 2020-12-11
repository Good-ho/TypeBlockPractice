import * as CryptoJS from "crypto-js";

class Block{
    public index:number;
    public hash:string;
    public preHash:string;
    public data:string;
    public timestamp:number;

    static calculBlockHash = (index:number, preHash:string, timestamp:number, data:string):string => {
        return CryptoJS.SHA256(index+preHash+timestamp+data).toString;
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

console.log(blockChain);

const getBlockChain = () : Block[] =>{
    return blockChain;
}

const getLatestBlock = ():Block => {
    return blockChain[blockChain.length-1];
}

const getNewTimeStamp =():number => {
    return Math.round(new Date().getTime()/1000);
}

export {}