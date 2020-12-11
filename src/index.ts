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