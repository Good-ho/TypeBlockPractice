# 3. Types in Typescript

## 1. Type
- 아래와 같이 함수의 arg 타입을 지정해보자.
```ts
const hi=(name:string, age:number, gender:string)=>{
    console.log(`Hello ${name}, ${age}, ${gender}`);
}
```

- 만약 아래와 같이 age에 string값을 넣으려하면 에러가 발생한다.
```ts
const name="ho",
age="24",
gender="male"

const hi=(name:string, age:number, gender:string)=>{
    console.log(`Hello ${name}, ${age}, ${gender}`);
}

//error!
hi(name, age, gender);
```

- 마지막으로 함수 반환 type에 대해 알아보자. 위 함수는 void 를 반환하고 있다. 만약 반환 type을 지정하고 싶다면? 아래와 같이!
```ts
const hi=(name:string, age:number, gender:string):boolean=>{
    console.log(`Hello ${name}, ${age}, ${gender}`);
    return true;
}
```

## 2. ts watch
- 계속 yarn start하니 귀찮다.
- src watch를 등록해 파일에 변화가 생기면 다시 start하게 하자(nodemon 처럼)
- yarn add tsc-watch --dev
- 설치 후 아래와 같이 script를 작성하자.(dist, src 폴더생성)
```json
"start": "tsc-watch --onSuccess \"node dist/index.js\""
```
- tsconfig 설정도 아래와 같이 수정. 
```json
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "ES2015",
        "sourceMap": true,
        "outDir": "dist"
    },

    "include": [
        "src/**/*"
    ],
    "exclude": [
        "node_modules"
    ]   
}
```