"use strict";
//generic 타입의 상속관계
//T는 string | number이라는 union type을 상속받고 있다
//즉 T는 string | number 만 가능하다.
//사용자가 인지 할 수 있도록
//정말 모든 타입을 받는 코드가 아니라면 
//타입은 가장 작은 범위로 제한되는 것이 좋다 .
var PersonExtends = /** @class */ (function () {
    function PersonExtends(name) {
        this._name = name;
    }
    return PersonExtends;
}());
new PersonExtends('ugo');
new PersonExtends(123);
//boolean은 지정된 union type에 속하지 않음으로 에러가 난다
new PersonExtends(true);
