//----------Boolean----------
var _a;
var isDone = false;
isDone = true;
console.log(typeof isDone);
var isOk = true;
//primitive 타입 변수에 Object 타입을 할당하려한다 
//error 발생
//let isNotOk: boolean =  new Boolean();
//----------Number----------
//10진수
var decimal = 5;
//16진수
var hex = 0xf00d;
//2진수
var binary = 10;
//8진수
var octal = 484;
var notANumber = NaN;
//아래와 같이 표기 가능
var underscoreNum = 1000000;
console.log(underscoreNum);
//----------string----------
var myName = 'ugo';
//Tempale String 
//`${expr}` 형식으로 사용 
var fullName = 'hwang ugo';
var age = 400;
var sentence = "my name is " + fullName + " \n and i'am " + age + " years old";
console.log(sentence);
//----------Symbol----------
// ECMAScript 2015에서 추가된 타입이다 
// new Symbol 로 생성할 수 없다 
// Symbol을 함수로 사용해서 symbol 타입을 만들어 낼 수 있다. 
//프리미티브 타입의 값을 담아서 사용한다 . 
//고유하고 수정불가능한 값으로 만들어준다 . 
//주로 접근을 제어하는데 사용한다
//false 출력된다. 
console.log(Symbol('ugo') === Symbol('ugo'));
var sym = Symbol();
var sym2 = Symbol();
var obj = (_a = {},
    _a[sym] = "value",
    _a);
obj[sym] = 'asd';
//접근불가
//obj[sym2] = 'asd';
console.log(obj[sym]);
//----------null, undifined ----------
//typle script에서 undifined 와 null은 각각 
//undefined 및 null이라는 타입을 가진다 . 
//void 와 마찬가지로 그 자체로는 그다지 유용하지 않다 
//다른 타입과 다르게 타입도 소문자 값도 소문자로 표기한다.
var u = undefined;
var n = null;
//tsconfig에 설정하지않으면 
// null, undifined은 다른 타입의 subtype으로 사용 될 수 있다.
// 다른 타입변수에 null, undifined를 할당할 수 있다는 의미이다.
//tsconfig 에서  --strictNullChecks 를 사용하면 subtype이 아니게 되고
//nullCheck가 된다.
//let name : string = null;
//tsconfing의 "strict"는 --strictNullChecks를 포함한다.
var str = null;
var num = undefined;
//void는 타입으로만 존재하기 때문에 값으로는 사용할 수 없다 
//void에는 undefined만 넣을 수 있다 
var v = undefined;
//--strictNullChecks가 true 라면 아래 코드를 사용할 수 없다 .
var union = null;
//위의 경우 union type을 사용한다 
//string과 null 모두 넣을 수 있다.
var unionT = null;
//null의 특징 
//null이라는 값으로 할당된 것
//무언가가 있는데 , 사용할 준비가 덜 된 상태 
//null 이라는 타입은 null 이라는 값만 가질 수 있다 .
//런 타임에서 typeof 연산자를 이용해서 알아내면 ,object가 출력된다.
var n1 = null;
//object 출력
console.log(typeof n1);
//undefined의 특징
//값을 할당하지 않은 변수는 undefined 라는 값을 가진다 . 
//무언가가 아예 준비가 안된 상태
//object 의 property 가 없을 때도 undefined 이다 . 
//런타임에서 typeof 연산자를 이용해서 알아내면 , undefined가 출력된다.
var u1 = undefined;
//undefined
console.log(u1);
//undefined
console.log(typeof u1);
//----------object----------
//타입스크립트에서 person1 은 Object타입이 아니다
//person1 은 {name : 'ugo' , age:400}
//타입이고 이를 오브젝트 리터럴 타입이라한다.
var person1 = { name: 'ugo', age: 400 };
var person2 = Object.create({
    name: 'ugo',
    age: 400
});
console.log(typeof person1);
console.log(typeof person2);
