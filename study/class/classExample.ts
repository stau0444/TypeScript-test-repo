class Person{
    name:string;
    age:number;    

    constructor(name:string , age:number){
        this.name = name;
        this.age = age;
    }
}


const p1:Person = new Person("ugo",10);
console.log(p1);