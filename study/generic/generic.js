"use strict";
function helloString(message) {
    return message;
}
function helloNumber(message) {
    return message;
}
/*
위의 두 메서드와 메서드 로직은 같으나 리턴타입 혹은 파라미터의 타입만 바뀌는 것이
반복된다면 any를 통해 어떤 타입이라도 받을 수 있도록 할 수 있지만
any는 얘기치 않은 문제들을 발생시킬 수 있기에 이때 any 대신 generic을 사용할 수 있다.
*/
//any type 사용
function hello(message) {
    return message;
}
//any type이 리턴된다
console.log(hello('ugo').length);
//number에는 length라는 메서드라 없기 때문에 
//컴파일 타임에 문제가 나지 않지만 런타임에서 undefined가 리턴된다.
console.log(hello(10).length);
//generic type 사용
//제네릭 타입으로 파라미터를 받으면 들어오는 데이터의 타입이 저장되어 
//함수내에서 제네릭타입으로 지정된 곳은 해당 타입으로 사용되게 된다
function helloGeneric(message) {
    return message;
}
//T->string
console.log(helloGeneric('helloG!'));
//T->number
console.log(helloGeneric(39));
//T->boolean
console.log(helloGeneric(true));
