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