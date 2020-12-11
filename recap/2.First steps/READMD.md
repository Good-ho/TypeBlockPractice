# 2. First steps with Typescript

## 1. what is ts ?
- typescript의 마법은 typed 언어라는 건데, 이 말인 즉슨, 어떤 종류의 변수와 데이터인지 설정을 해줘야 한다는 것.


## 2. example
- 아래와 같이 코드 작성 후 실행하면 정상적은 js code가 실행된다.
```js
const name="ho",
age=24,
gender="male"

const hi=(name, age, gender)=>{
    console.log(`Hello ${name}, ${age}, ${gender}`);
}

hi(name, age, gender);
```

- 만약 내가 gender를 사용하지 않으면 어떻게 될까?
- ts에서는 arg가 하나 없다면서 에러를 발생시킨다! (js에서는 error발생하지 않음)
- 만약 gender para에 ?를 붙이면 어떻게 될까?  compile이 된다! 그 이유는 ?가 붙으면 options 인자가 되기 때문!
- 이 것만으로도 매우 powerfull한 기능이다. 왜냐면, 파라미터의 내용을 보고 gender가는 params가 optional 한지 알 수 있기 때문이다.