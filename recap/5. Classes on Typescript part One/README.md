# class on TypeScript 

## 1. class 사용
- 아래 코드와 같이 class 사용할 수 있다.
- js class와 비교하여 public, private 등의 접근권한과, string, number등 type을 추가할 수 있다.
- react, node, express를 사용한다면 interface 코드를 js에서는 이해할 수 없으므로 class를 사용한다.
```ts
class Human{
    public name:string;
    public age:number;
    public gender:string;
    constructor(name:string, age:number, gender:string){
        this.name = name;
        this.age=age;
        this.gender=gender;
    }
}

const ho=new Human("ho", 22, "male");

const hi=(person:Human):string=>{
    return `Hello ${person.name}, ${person.age}, ${person.gender}`;    
}

console.log(hi(ho));

export {}
```