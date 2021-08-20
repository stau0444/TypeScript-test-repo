"use strict";
function helloArray(message) {
    return message[0];
}
console.log(helloArray(['ugo', 'gogo']));
//배열안의 타입이 여러개이기 때문에 string | number 라는 union 타입이 지정된다.
console.log(helloArray(['hello', 5]));
//튜플형태로 데이터가 들어온다면  제네릭으로 튜플의 형태를 지정해 줘야한다.
function helloTuple(message) {
    return message[0];
}
helloTuple(['hello', 'world']);
helloTuple(['hello', 5]);
