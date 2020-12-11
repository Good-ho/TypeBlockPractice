# 6. Blockchain Creating a Block

## 1. Block structure
- 아래와 같이 block class 만들어보자.
```ts
class Block{
    public index:number;
    public hash:string;
    public preHash:string;
    public data:string;
    public timestamp:number;
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

let blockChain:[Block] = [genesisBlock];

console.log(blockChain);

export {}
```

