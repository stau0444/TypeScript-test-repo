//클래스에서 제네릭 타입 사용시 
//제네릭타입의 유효범위는 클래스 전체가 된다.

class Person<T,K>{
    private _name:T;
    private _age:K;
    constructor(name: T , age: K){
        this._name = name;
        this._age = age;
    }
}

console.log(new Person('ugo',123));
//제네릭을 지정해 줬기 떄문에 에러가 뜬다.
//console.log(new Person<string>(123))

console.log(new Person<string,number>('ugo',123))
