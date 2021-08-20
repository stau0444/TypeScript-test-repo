"use strict";
class Person8 {
    constructor() {
        this.name = 'ugo';
        this.name = 'hallo';
    }
    //클래스 생성시점 이외에서는 readonly 프로퍼티를 수정할 수 없다.
    hi() {
        this.name = 'asd';
    }
}
