# 4. Interfaces on Typescript

## 1. object params
- 만약 내가 object를 인자로 넘기고 싶다면 어떻게 해야할까?
- 아래와 같이 작성!
- interface를 통해 object interface를 만들고, paras type을 해당 interface로 type지정하면 된다!
```ts
interface Human {
    name:string,
    age:number,
    gender:string
}

const person = {
    name:"ho",
    age:22,
    gender: "male"
}

const hi=(person:Human):string=>{
    return `Hello ${person.name}, ${person.age}, ${person.gender}`;    
}

console.log(hi(person));

export {}
```