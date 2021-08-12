## TypeScript 
#

>공식 문서에서 TypeScript는 타입이란 개념을을 추가해서 자바스크립트를 확장하며
TypeScript compiler 를 통해 plain javascript로 컴파일되어  코드를 실행하기
 전에 에러를 잡을 수 있어 에러를 잡는데 사용되는 시간을 줄여주고 , 
 어떤 브라우저나 OS , 자바스크립트 실행환경에서도 실행된다고 써 있다 

#
# TypeScript 특징
1.타입스크립트는 프로그래밍 언어이다 .

2.타입스크립트는 interpreted     언어인 javascript로 컴파일 된다.  (compiled Language)

3.전통적인 컴파일 언어와는 다름 점이 있으며 'compile' 대신 'Transpile'언어 라고도 한다.


특징|Compiled | Interpreted
--|--|--
컴파일 | 컴파일이 필요 | 컴파일 필요 x
컴파일러| 컴파일러가 필요| 컴파일러 필요 x
컴파일시점|컴파일타임 |코드 자체를 순차적으로 실행
실행 | 컴파일된 결과물 실행 | 코드를 바로 실행

#
# TypeScript 설치

[설치할 것]

**1.TypeScipt Compiler**

>-TypeScipt를 plain한 javascript로 컴파일 시켜주는 프로그램     

```js
//TypeScript compiler 글로벌 설치 명령  
npm i typescript -g

//NPM 프로젝트안에서만 TypeScript 설치

//npm 프로젝트 생성
npm init 
//프로젝트내에 typescript설치
npm i typescript


//1.NPX
//tsconfig 파일생성
npx tsc --init
//tsc 실행 명령 (node_modules/.bin/tsc와 같이 동작)
npx tsc

//2.package.json "script"에 명령어 정의

"scripts": {
    "dev":"parcel index.html",
    "build":"parcel build index.html"
}

```   

**2.plain javascript를 실행할환경(browser, Node.js)**

#

## TypeScipt 명령어
#
컴파일 명령은 tsc로 시작한다. 

    **tsc 파일명.ts** : ts 파일을 js파일로 컴파일 해준다.

    **tsc --init** : tsconfig.json 파일을 만들어내고 프로젝트내에서 컴파일시 설정 사항들을 정의할 수 있다 TypeScript Compiler 사용을 위해서는 .   tsconfig.json 파일이 필요하다 

    **tsc -w** : watch모드를 실행시킨다 ts파일 변경시 자동으로 감지하여 컴파일 시킨다.

#
## VScode에서의 TypeScript
#
>vscode 안에는 TypeScript Compiler가 내장되어 있다 . 
내장된 컴파일러 버전은 VS Code 가 업데이트 되면서 올라간다 . 
내장된 컴파일러를 사용할 수도 있지만 ,직접 설치하여 컴파일러를 선택할 수도 있다 . vscode 에서의 compiler는 코드해석을 위해 사용되며 , 직접 컴파일 하지는 않는다.

#
## Type Annotation
#

>타입스크립트가 갖는 고유의 기능이며 자바스크립트와 가장 차별되는 기능이다.
Type Annotation을 통해 변수 또는 개체에 타입을 지정해 줄 수 있다.  

```ts

//변수에 할당되는 값의 타입이 지정된다
let a = 'Ugo';
let b = 123;
//a는 String 타입이기 때문에 컴파일 에러가 뜬다
a = 39;
b = 12;

//타입 어노테이션을 통해 
//빈 변수의 타입을 지정해 줄 수도 있다.
let c: string ;

c = "ugo";
//에러
c = 123;


//파라미터에 타입 지정
function hello(b:number){
    console.log(number)
}
//error
hello('ugo');
//동작
hello(123);
```

#
##  TypeScript의 Type vs JavaScript의 Type
#

    TypeScript: static types (컴파일시에 타입체크)

    JavaScript: Dynamic Types(런타임에 타입체크)


```ts
ex)

//Javascript

function add(n1,n2){
    if(typeof n1 !== 'number' || typeof n2 !== 'number')
    throw new Error('Incorrect input');

    return n1+n2;
}


//typescript
//타입 체크가 컴파일시에 일어난다
function add2(n1:number , n2 : number ){
    return n1 +n2
}

add('ugo',123);
//error
add2('ugo',123);

```

#
## TypeScript Type의 분류 
#
1.Typescript에서 프로그램 작성을 위해 기본 제공하는 데이터 타입

2.사용자가 정의한 타입도 기본 자료형들로 쪼개진다.

3.javascript 기본 자료형

     -Boolean
     -Number 
     -String  
     -Null  
     -Undifined 
     -Symbol
     -Array 
     -Object

4.프로그래밍을 도울 타입들

    -Any , Void , Never , Unknown
    -Enum(열거형)
    -Tuple(여러개 타입을 받을때 사용)


#
###  Primitive Type
#

>-오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형    
-리터럴 혹은 래퍼 객체로 생성이 가능
하지만 래퍼 객체는 타입이 Object 이다.   
 
**es2015 기준 6가지* 
- boolean
- number
- string
- symbol
- null
- undifined 


### Type Casing 

>-타입 스크립트에서는 Primitive Type을 래퍼 객체로 생성하여 사용하는 것을 권장하지 않는다 아래의 예시를 보자


```ts

//권장 X
//String은 primitive가 아니며 
//타입으로 사용하면 안된다.
function print(s: String) String{
    return console.log(s);
}

//권장

function print(s:string) string{
    return console.log(s);
}

```
#
### Primitive Type 예시
#

```ts

//----------Boolean----------

let isDone: boolean = false; 

isDone = true;

console.log(typeof isDone );

let isOk: Boolean = true;
//primitive 타입 변수에 Object 타입을 할당하려한다 
//error 발생
//let isNotOk: boolean =  new Boolean();


//----------Number----------

//10진수
let decimal: number = 5;

//16진수
let hex:number = 0xf00d;

//2진수
let binary: number = 0b1010

//8진수
let octal: number = 0o744;

let notANumber : number = NaN;

//아래와 같이 표기 가능
let underscoreNum: number = 1_000_000;
console.log(underscoreNum);


//----------string----------

let myName: string = 'ugo';

//Tempale String 
//`${expr}` 형식으로 사용 

let fullName : string = 'hwang ugo';
let age : number = 400;

let sentence: string = `my name is ${fullName} 
 and i'am ${age} years old`

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

const sym = Symbol();
const sym2 = Symbol();

const obj = {
    [sym]: "value"
};

obj[sym] = 'asd';

//접근불가
//obj[sym2] = 'asd';

console.log(obj[sym])


//----------null, undifined ----------

 //typle script에서 undifined 와 null은 각각 
 //undefined 및 null이라는 타입을 가진다 . 
 //void 와 마찬가지로 그 자체로는 그다지 유용하지 않다 
 //다른 타입과 다르게 타입도 소문자 값도 소문자로 표기한다.
 
 let u : undefined = undefined;
 let n : null = null;

 //tsconfig에 설정하지않으면 
 // null, undifined은 다른 타입의 subtype으로 사용 될 수 있다.
 // 다른 타입변수에 null, undifined를 할당할 수 있다는 의미이다.
 //tsconfig 에서  --strictNullChecks 를 사용하면 subtype이 아니게 되고
 //nullCheck가 된다.


 //let name : string = null;
 //tsconfing의 "strict"는 --strictNullChecks를 포함한다.
 let str : string = null;
 let num : number = undefined;

 //void는 타입으로만 존재하기 때문에 값으로는 사용할 수 없다 
 //void에는 undefined만 넣을 수 있다 

 let v : void = undefined;


 //--strictNullChecks가 true 라면 아래 코드를 사용할 수 없다 .
 let union: string = null;

 //위의 경우 union type을 사용한다 
 //string과 null 모두 넣을 수 있다.
 let unionT: string | null = null;

 


 //null의 특징 
 //null이라는 값으로 할당된 것
 //무언가가 있는데 , 사용할 준비가 덜 된 상태 
 //null 이라는 타입은 null 이라는 값만 가질 수 있다 .
 //런 타임에서 typeof 연산자를 이용해서 알아내면 ,object가 출력된다.

 let n1 : null = null;
 //object 출력
 console.log(typeof n1)

 //undefined의 특징
 //값을 할당하지 않은 변수는 undefined 라는 값을 가진다 . 
 //무언가가 아예 준비가 안된 상태
 //object 의 property 가 없을 때도 undefined 이다 . 
 //런타임에서 typeof 연산자를 이용해서 알아내면 , undefined가 출력된다.

 let u1 : undefined = undefined;
 //undefined
 console.log(u1)
 //undefined
 console.log(typeof u1)

```

#
### 2. Reference Type 예시
#


``` ts

 //----------object----------
/*
    1.primitive type이 아닌것 을 나타내고 싶을때 사용한다 
    2.
*/

//타입스크립트에서 person1 은 Object타입이 아니다
//person1 은 {name : 'ugo' , age:400}
//타입이고 이를 오브젝트 리터럴 타입이라한다.
const person1: = {name : 'ugo' , age:400}

const person2 = Object.create({
    name:'ugo',
    age:400
})

console.log(typeof person1)
console.log(typeof person2)



//----------Array----------
/*
   1.array는 객체이다 
   2.array는 공통의 타입으로 모아진 데이터 집합이다
   
*/

//배열 타입 표현1
let list: number[] = [1, 2, 3,4];

//유니언타입으로 표현
let list2: (number|string)[] = [1, 2, 3,"4"];

//배열 타입 표현2 :jsx tsx 에서 충돌위험이 있다는 얘기가 잇다.
let list3: Array<number> = [1, 2, 3];



//----------Tuple----------
/*
    1.데이터의 타입이 다를 수 있다 .
    2.길이가 정해져 있다.
    3.타입의 순서가 정확히 일치해야한다. 
*/

//tuple 표현
let x: [string,number];

//순서,타입,길이가 일치해야한다
x=["hello",2];

const p :[string,number] = ["ugo",300];
const [first,second] = p;



//----------Any----------



/*
    1.어떤 것도 들어올 수 있다는 것을 의미한다.
    2.컴파일 타임에 타입체크가 이뤄지지 않기떄문에 최대한 쓰지 않는 것이 좋다 .
    3.noimplictAny - any를 써야하는데 쓰지 않으면 오류를 내도록하는 옵션(strict 옵션에 포함되어 있다.)
    4.any는 계속해서 개체를 통해 전파된다. 
    5.편의를 위해 any를 사용하면 타입 안정성을 잃게된다

*/

function returnAny(message : any) :any {
    console.log(message);
}

//any1의 타입은 any이다
const any1 = returnAny('아무거나');

//any는 어떤 것이여도 상관없다는 뜻 
any1.toString();

//any는 계속해서 개체를 통해 전파된다. 

let anyTyped : any = {};

//에러가 나지 않는다.
const d = anyTyped.a.b.c.d;


//any의 문제 예시 

function leakingAny(obj:any){
    //obj.num은 any 이다
    const a = obj.num;
    //b도 any이다.
    const b = a +1 ; 
    return b;
}
//c도 any이다 
const c1 = leakingAny({num:0});

//위와 같은 코드에서 문제가 생길수 있는 것을 적절히 막아주는 것이 중요하다


// 값이 들어올때 타입이 지정된다
function leakingAny2(obj:any){
    const a :number = obj.num;
    //b도 number 이다.
    const b = a +1 ; 
    return b;
}
//c도 number이다 
const c2 = leakingAny2({num:0});


//----------Unknwon----------

/*
    1.응용 프로그램을 작성할 때 동적 컨텐츠 같이 모르는 
      변수의 타입을 묘사해야할 때가있다 .
    2.이 경우 , 컴파일러와 미래의 코드를 읽는 사람에게 이변수가 
      무엇이든 될 수 있음을 알려주는 unknown 타입을 사용한다.
    3.any 보다 Type-safe 한 타입이다 . 
    4.타입을 확정해 주지 않으면 다른 곳에 할당 할 수 없고 , 사용할 수 없다. 
    5.runtime error 를 줄일 수 있다 . 
*/

declare const maybe : unknown;

//unknown은 number 에 바로 할당 할 수 없다 .
//type gaurd

if(typeof maybe === 'number'){
    const aNumber :number = maybe;
}

if(maybe === true){
    const aBoolean:boolean = maybe;
}

if(typeof maybe === 'string'){
    const aString:string = maybe;
}


//----------never----------

/*
    1.리턴에 사용되는 타입이다
    2.never는 모든타입의 subtype 이다 , 모든타입에 할당 가능 
    3.never 에는 그 어떤 것도 할당할 수 없다 .
    4.any 도 never 에 할당할 수 없다 . 
    5.잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 한다.
*/

//throw 되어 어떤 형태도 리턴하지 않기 때문에 리턴타입을 never로 사용한다.
function error(message:string):never{
    throw new Error(message);
}

//never 라고 타입추론된다
function fail() {
    return error("failed");
}

function infiniteLoop():never {
    while(true){

    }
}

let nev:string = "ugo";

if(typeof a !== 'string'){
    a;
} 

//----------void----------

/*
    1.리턴되는 것이 없을때 사용한다 .
    2. void는 리턴되는 것의 사용을 막는다 
*/

//리턴되는 것이 없기 떄문에 void 로 리턴타입이 추론된다.
function returnVoid(message:string) {
    console.log(message);
}

function returnUndefined(message:string):undefined {
    console.log(message);
    return undefined;
}

//void는 리턴타입으로 정말 아무것도 안할때 사용된다.
const vo = returnVoid('void');
const und = returnUndefined("hello");
//error
if(typeof vo === 'void'){

}

if(typeof und === 'undefined'){

}


```

