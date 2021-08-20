"use strict";
//클래스에서 제네릭 타입 사용시 
//제네릭타입의 유효범위는 클래스 전체가 된다.
var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    return Person;
}());
console.log(new Person('ugo', 123));
//제네릭을 지정해 줬기 떄문에 에러가 뜬다.
//console.log(new Person<string>(123))
console.log(new Person('ugo', 123));
