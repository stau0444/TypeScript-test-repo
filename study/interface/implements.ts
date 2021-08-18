interface IPerson{
    name: string;
    age?: number;
    hello() :void;
}

class Person implements IPerson{
    name: string;
    age?: number | undefined;

    constructor(name:string){
        this.name = name;
    }

    hello(): void {
        console.log(`${this.name} 입니다`)
    }
    
}

//타입을 인터페이스 타입으로 받는 것이 정확한 표현이다.
const person:IPerson = new Person('ugo');
person.hello();