"use strict";
class AbstractPerson {
    constructor() {
        this._name = 'ugo';
    }
}
class Person44 extends AbstractPerson {
    setName(name) {
        this._name = name;
    }
}
const p = new Person44();
p.setName('ugo');
console.log(p);
