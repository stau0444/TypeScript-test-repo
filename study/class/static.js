"use strict";
class Person10 {
    static hello() { console.log(`hello ${Person10.NAME}`); }
    changeName(name) {
        Person10.NAME = name;
    }
    get name() {
        return Person10.name;
    }
}
Person10.NAME = "ugo";
const p10 = new Person10();
const p11 = new Person10();
//static 필드 혹은 메서드는 해당 클래스로 만들어진 모든 인스턴스에서 공유된다
//인스턴스가 담긴 변수로 참조하는 것이 아니라 
//클래스 자체로 참조한다
//X
//p10.hello();
//O
Person10.hello();
p11.changeName("ulala");
Person10.hello();
