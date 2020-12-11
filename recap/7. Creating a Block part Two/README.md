# 7. Creating a Block part Two

## 1. new block
- 이제 새로운 block을 만들어보자.
- 새로운 block을 만들기 위해서는 hash 계산을 해야한다.
- hash 계산을 위해 crypto-js install
- yarn add crypto-js
- js와 import 방식이 조금 다름
- import * as CryptoJS from "CryptoJS";

## 2. hash 계산
- hash 계산을 위해 아래와 같은 static method하나 만들자.
```ts
    static calculBlockHash = (index:number, preHash:string, timestamp:number, data:string):string => {
        return CryptoJS.SHA256(index+preHash+timestamp+data).toString;
    }
```