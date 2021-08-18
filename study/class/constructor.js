"use strict";
class Person7 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        console.log('getter');
        return this.name;
    }
    set name(name) {
        console.log('setter');
        this._name = name;
    }
}
//getter와 setter를 이용해 간접적으로 값을 가져오거나 셋팅한다
const per = new Person7("ugo", 40);
//get name()이 블러와 진다.
console.log(per.name);
//set name()이 불러와 진다.
per._name = '40';
console.log(per.name);
