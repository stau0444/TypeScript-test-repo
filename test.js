//변수에 할당되는 값의 타입이 지정된다
var a = 'Ugo';
var b = 123;
//a는 String 타입이기 때문에 컴파일 에러가 뜬다
//a = 39;
b = 12;
//타입 어노테이션을 통해 
//빈 변수의 타입을 지정해 줄 수도 있다.
var c;
c = "ugo";
//에러
//c = 123;
// function add(n1,n2){
//     if(typeof n1 !== 'number' || typeof n2 !== 'number')
//     throw new Error('Incorrect input');
//     return n1+n2;
// }
//typescript
//타입 체크가 개발시에 일어난다
function add2(n1, n2) {
    return n1 + n2;
}
//add('ugo',123);
//error
//add2('ugo',123);
