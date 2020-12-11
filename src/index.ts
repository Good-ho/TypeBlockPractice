const name="hoho",
age=24,
gender="male"

const hi=(name:string, age:number, gender:string):boolean=>{
    console.log(`Hello ${name}, ${age}, ${gender}`);
    return true;
}

hi(name, age, gender);

export {}