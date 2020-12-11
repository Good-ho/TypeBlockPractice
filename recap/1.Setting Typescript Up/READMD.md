# Setting Typescript Up

## 1. Typescript install
- yarn add typescript

## 2. config settings
- create tsconfig.json file create.
- 이 파일에 typescript에게 어떻게 js로 변환할지 알려주면서 몇 가지 옵션을 줘보자.
- include : 어떤파일들이 컴파일 과정에 포함되는지 알려줌. 

## 3. 실행해보기.
- index.ts 파일을 만들고, tsconfig.json에 include에 포함하자.
- 그런 후 terminal에서 tsc 명령어를 입력하면, index.ts를 컴파일하여 index.js, index.js.map 을 만들어준다.

## 4. script 작성
- 매번 tsc로 compile할 수 없으니 script를 만들자.
- 아래와 같이 script 작성 후, yarn start를 하면 prestart 실행 후 start를 실행한다.
```json
"scripts": {
    "start": "node index.js",
    "prestart": "tsc"
  }
```