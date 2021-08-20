"use strict";
function helloG(message, comment) {
    console.log(comment);
    return message;
}
//함수 사용시 타입을 지정함
helloG('ugo', 39);
//타입이 추론된다.
//가장 좁은 범위의 타입이 추론되기 떄문에 
//타입은 36이된다. 
helloG(36, 40);
