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

    tsc 파일명.ts : ts 파일을 js파일로 컴파일 해준다.

    tsc --init : tsconfig.json 파일을 만들어내고 프로젝트내에서 컴파일시 설정 사항들을 정의할 수 있다 TypeScript Compiler 사용을 위해서는 .   tsconfig.json 파일이 필요하다 

    tsc -w : watch모드를 실행시킨다 ts파일 변경시 자동으로 감지하여 컴파일 시킨다.

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
    
    2.컴파일 타임에 타입체크가 이뤄지지 않기떄문에 
      최대한 쓰지 않는 것이 좋다 .
    
    3.noimplictAny - any를 명시해야 하는데 명시하지 않으면 
      오류를 내도록하는 옵션(strict 옵션에 포함되어 있다.)
    
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
    1.리턴문에서 사용되고 리턴되는 것이 없을때 사용한다 .

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


#
## Typescript의 Type System
#

두 가지 종류가 있다 .

    1.컴파일러에게 사용하는 타입을 명시적으로 지정하는 시스템
    2.컴파일러가 자동으로 타입을 추론하는 시스템

>-기본적으로는 명시된 타입을 사용하며 타입이 명시 되지 않았을때 컴파일러가 타입을추론한다   


    
타입이란 것은 해당 변수가 할 수 있는 일을 결정한다.
자바스크립트에서는 함수 사용법에 대한 오해를 야기할 수 있다.
아래의 코드를 보자 

```js 
//a는 숫자타입임을 가정한다.
function f2(a){
    return a * 38 ;
}

console.log(f2(10))  // 380
console.log(f2('UGO')) //NaN

```
위의 자바스크립트 코드에서 f2의 a는 숫자 타입이 필요하지만
함수 사용자는 해당코드를 까보거나 하지 않는 이상 해당 변수가 
어떤 타입을 필요로 하는지 알 수 없다

#
## tsconfig.json의 옵션들
#
```ts

function f3(a){
    return a * 38 ;
}

console.log(f3(10))  // 380
console.log(f3('UGO')+5) //NaN

/*
    noImplicitAny

    위의 경우 타입을 명시 해놓지 않았기 때문에 
    컴파일러가 타입추론을 하지만 
    어떤 타입을 사용할지가 명확하지 않기떄문에
    컴파일러는 any 타입으로 지정한다 .
    any는 연쇄적으로 퍼지기 떄문에 
    명시적 으로 타입 지정이 일어나기 전까지는
    변수는 any 타입을 갖아 위험하다 .
    tsconfig에서 noImplicitAny 옵션을 켜두면
    타입이 명시되지 않았을 때 타입이 any로 추론될 경우
    컴파일 에러를 발생시킨다
    (원하는 타입이 any라면 any를 명시하도록 강제한다).
    (noImplicitAny는 strict 옵션 안에 포함된 옵션이다.)
*/


function f4(a:number){
    if(a>0){
        return a * 38;
    }
}

//1.
console.log(f4(5)) // 190
//2.
console.log(f4(-5)+5) //NaN


/*
    strictNullcheck

    위의 코드를 보면 파라미터는 Number타입으로 명시가 되어있지만
    리턴타입은 따로 명시되어 있지 않다 .
    컴파일러는 이때 f4의 리턴타입을 number로 추론한다 .
    문제는 2번에서 발생한다 .
    2번에서 f4의 파라미터로 -5가 넘어가는데  런타임 시점에서 
    if문 안으로 들어갈 수 없기 때문에  undefined가 리턴 되지만
    f4의 리턴타입은 number 로 추론된다 
    이게 가능한 이유는 타입스크립트에서
    undefined를 다른 타입의 subtype으로 사용하기 때문이다.

    undefined와 number는 엄연히 다른 타입이기 때문에
    이를 위해 tsconfig의 strictNullcheck 옵션을 사용한다
    이 옵션은 모든 타입에 자동으로 포함되어 있는
    'null' 과 'undefined '를 제거해준다.
    (strictNullcheck는 strict 옵션에 포함되어있다.)

    strictNullcheck을 키면 
    위 코드에서 2번 코드에는 컴파일 에러가 발생한다 
    이때 f4의 리턴타입은 유니언 타입으로 number | undefined가 된다.
    런타임 시점에 어떤값이 들어올지 모르기 때문에 
    유니언타입으로 받은 후 의도하지 않은 값일 경우 에러를 터뜨려주는 방식으로
    안전하게 코드를 작성하는 것이 좋다 
*/


function f5(a:number) : number{
    if(a>0){
        return a * 38;
    }
}

 /*
    noImplicitReturns

    noImplicitReturns는 함수 내에서 모든 코드가 값을 리턴하지 않으면
    컴파일 에러를 발생시키는 옵션이다 .

    위의 코드를 보면 리턴타입이 number로 명시되어 있다 
    다음으로 런타임에서 if문으로 들어올때 number를 리턴하지만
    그렇지 않을 경우에 undefined를 리턴한다 .
    noImplicitReturns가 켜져 있다면
    위 코드에서는 그렇지 않을 경우의 리턴 값에 대한 정의가 없기 때문에
    에러가 발생한다. 
 */
```

#
## Structural Type System 
   vs
## Nominal Type System
#

#
## Structural Type System 
#

    구조가 같으면 같은 타입으로 한다
    타입스크립트는 Structural Type System 을 따른다

```ts
ex)

interface IPerson{
    name:string;
    age:number;
    speak():string;
}

type PersonType = {
    name: string;
    age: number;
    speak(): string;
}

let personInterface:IPerson = {} as any;
let personType:PersonType = {} as any;

//구조가 같음으로 에러가 나지 않는다
personInterface = persontype;
personType = personInterface;

```

#
## Nominal Type System
#

    구조가 같아도 이름이 다르면 ,다른 타입이다. 
    대표적언어 : Java , c 


```java
public class Person{
    private String name;
    private int age;
}

public class Dog{
    private String name;
    private int age;
}

Person p = new Person();
Dog d = new Dog();

//불가능 
//구조가 같다고 같은 타입이 아니다. 
p=d;

```

#
## 타입 호환성(Type Compatibility)
#

### subtype

```ts
// sub1 타입은 sup1 타입의 서브 타입이다. 
let sub1 : 1 = 1; 
let super1 : number = sub1;
sub1 = super1 //error

//sub2 타입은 super2의 서브타입이다 
//array<object
let sub2: number[] = [1];
let sup2: object = sub2;
sub2 = sup2 ; //error

//sub3 타입은 super3의 서브 타입이다.
//tuple < array
let sub3:[number,number] = [1,2];
let super3:[]=sub3;
sub3 = sup3

//sub4 타입은 super4 타입의 서브타입이다 
//number<any

let sub4:number = 1; 
let sup4 any = sub4;
//특이한점은 any에서는 이 경우 에러가 안난다.
//예외적인 케이스다 any 쓰지말자
sub4 = sup4; 

//sub6은 super6의 서브타입이다
class animal{}

class Dog extend Animal{
    eat(){}
}

let sub6:Dog =new Dog();
let super6:Animal = sub6
sub6 = super6;// error

//todo 공변 , 반변 설명 추가 필요

```

#
## 타입 별칭(Type Alias)
#
    -인터페이스와 비슷해 보인다.
    -Primitive , Union Type , Tuple ,Functiom
    -직접 작성하는 타입을 다른 별칭을 지정할 수 있다.
    -만들어진 타입의 refer 로 사용하는 것이지 타입을 만드는 것이 아니다.


```ts
    //Aliasing Primitive
    type MyStringType = string;

    const str = 'world';

    let myStr : MyStringType = 'hello';
    myStr = str;


    //Aliasing Union Type

    let person : string |number = 0;
    person = 'Ugo';

    type StringOrNumber = string | number;

    let another : StringOrNumber = 0 ; 
    another = 'Hwang';

    //Aliasing Tuple

    let person :[string, number] = ['mark' ,36];

    type PersonTuple = [string , number];

    let another : PersonTuple = ['ugo' , 24];  


    //Aliasing Function

    type EatType = (food:string) => void;

```

#
## Compilation Context
#

    어떤 설정에 의해 컴파일이 이뤄질지와
    어떤 파일을 파싱하고 분석할지를 결정하는 
    context(문맥)을 말한다 . 
    해당 설정들은 tsconfig.json 파일에 
    논리적으로 그룹핑하여 정의할 수 있다 .


#
## tsconfig schema
#

 **tsconfig schema 사이트**

 -tsconfg의 전체적인 스키마를 확인할 수 있다.
 
    https://json.schemastore.org/tsconfig


#
## TopLevel properties
#

**1.compileOnsave**

>-파일을 save하면 compile 하도록 설정   
 -default는 false   
 -누가 컴파일을 시켜주나?   
   -visual studio 2015 with Typescript 1.8.4 이상   
   -atom-typescript 플러그인

```json

"compileOnSaveDefinition": {
    "properties": {
        "compileOnSave": {
            "description": "Enable Compile-on-Save for this project.",
            "type": "boolean"
            }
        }
}
```

**2.extends**

>-다른파일을 상속받아 tsconfig를 설정할 수 있게 해준다.   
 -타입스크립트 2.1이상부터 사용가능하고 부모 설정파일의 path를 적어주면된다.   
 
 -여러가지 부모 설정들을 모아놓은 github repository   

 https://github.com/tsconfig/bases
 

```json
"extendsDefinition": {
    "properties": {
        "extends": {
            "description": "Path to base configuration file to inherit from. Requires TypeScript version 2.1 or later.",
            "type": "string"
        }
    }
}

```


**3.Files ,include , exclude**

>-프로젝트안의 어떤 파일을 컴파일할 건지를 결정한다   
 -files 나 include 가 없으면 모든 파일을 컴파일 하려고한다.   
 

>files   
-상대 혹은 절대 경로의 리스트 배열로 파일을 정의한다.   

>include   
-glob 패턴으로 경로를 설정(.gitignore 와 같음)   
-include는 exclude보다 우선 순위가 낮다   
-*를 사용하면 .ts / .tsx / .d.ts 만 include 된다.

>exclude   
-설정 안하면 4가지(node_modules , bower_components, jspm_package,<outDir>)를
default로 제외한다 .   
-<outDir>는 항상 제외한다 (include에 포함되어 있어도 제외)

 ```json
"filesDefinition":{
   "properties":{
      "files":{
         "description":"If no 'files' or 'include' property is present in a tsconfig.json, the compiler defaults to including all files in the containing directory and subdirectories except those specified by 'exclude'. When a 'files' property is specified, only those files and those specified by 'include' are included.",
         "type":"array",
         "uniqueItems":true,
         "items":{
            "type":"string"
         }
      }
   }
},
"excludeDefinition":{
   "properties":{
      "exclude":{
         "description":"Specifies a list of files to be excluded from compilation. The 'exclude' property only affects the files included via the 'include' property and not the 'files' property. Glob patterns require TypeScript version 2.0 or later.",
         "type":"array",
         "uniqueItems":true,
         "items":{
            "type":"string"
         }
      }
   }
},
"includeDefinition":{
   "properties":{
      "include":{
         "description":"Specifies a list of glob patterns that match files to be included in compilation. If no 'files' or 'include' property is present in a tsconfig.json, the compiler defaults to including all files in the containing directory and subdirectories except those specified by 'exclude'. Requires TypeScript version 2.0 or later.",
         "type":"array",
         "uniqueItems":true,
         "items":{
            "type":"string"
         }
      }
   }
}



 ```

**5.compileOptions (typeRoots , types)**

>-자바스크립트 라이브러리(react ,vue)를 사용할때  타입을 지정해 주는 도구들이 필요한데
  써드파티를 사용하여 타입을 제공해줬었지만 타입스크립트2.0 부터 자체적으로 지원해준다.   
  아무 설정을 안하면 node_modules /@types 라는 모든 경로를 찾아서 사용한다 .   
  ex) react 라이브러리 다운시 npm i --save-dev @types/react 로      
  js로 정의된 react의 타입을 지정해 줄 수 있다   
   -typeRoots 를 사용하면 지정한 경로의 배열 아래서 타입을 가져온다   
   -type을 사용하면 ./node_modules/@types/안의 모듈이름을 찾아온다.   
   -typeRoots 와 types를 같이 사용하지 않는다.

  


```json
{
   "typeRoots":{
      "description":"Specify multiple folders that act like `./node_modules/@types`.",
      "type":"array",
      "uniqueItems":true,
      "items":{
         "type":"string"
      },
      "markdownDescription":"Specify multiple folders that act like `./node_modules/@types`.\n\nSee more: https://www.typescriptlang.org/tsconfig#typeRoots"
   },
   "types":{
      "description":"Specify type package names to be included without being referenced in a source file.",
      "type":"array",
      "uniqueItems":true,
      "items":{
         "type":"string"
      },
      "markdownDescription":"Specify type package names to be included without being referenced in a source file.\n\nSee more: https://www.typescriptlang.org/tsconfig#types"
   }
}
  ```

**5.compileOptions (target , lib)**

    -target :어떤 런타임 환경에서 실행할 수 있는지 es의 버전을 결정한다.   
    (지정을 따로안하면 es3가 지정됨)
```json
{
   "target":{
      "description":"Set the JavaScript language version for emitted JavaScript and include compatible library declarations.",
      "type":"string",
      "default":"ES3",
      "anyOf":[
         {
            "enum":[
               "ES3",
               "ES5",
               "ES6",
               "ES2015",
               "ES2016",
               "ES2017",
               "ES2018",
               "ES2019",
               "ES2020",
               "ES2021",
               "ESNext"
            ]
         },
         {
            "pattern":"^([Ee][Ss]([356]|(20(1[56789]|2[01]))|[Nn][Ee][Xx][Tt]))$"
         }
      ],
      "markdownDescription":"Set the JavaScript language version for emitted JavaScript and include compatible library declarations.\n\nSee more: https://www.typescriptlang.org/tsconfig#target"
   }
}

-lib : 기본 type definition 라이브러리를 어떤 것을 사용할 것인지 정함
target 에 따라  lib가 default 로 설정된다

```

**6.compileOptions (outDir , outFile , rootDir)**

>outDir : 프로젝트 build 될 때 사용되는 폴더를 지정한다  
outFile : 프로젝트를 번들화한 하나의 자바스크립트파일을 지정한다.   
(require.js,system.js 이용해야한다.)
rootDir : 프로젝트 루트 경로 설정(루트 경로에 있는 것들이 컴파일되어 outDir로 넘어간다)  만약 rootDir을 따로 설정하지 않으면 프로젝트 최상위 폴더가 root가 되고 
최상위 폴더의 계층구조에 따라 폴더와 컴파일된 파일들이 생성된다 .
```json

{
   "outFile":{
      "description":"Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output.",
      "type":"string",
      "markdownDescription":"Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output.\n\nSee more: https://www.typescriptlang.org/tsconfig#outFile"
   },
   "outDir":{
      "description":"Specify an output folder for all emitted files.",
      "type":"string",
      "markdownDescription":"Specify an output folder for all emitted files.\n\nSee more: https://www.typescriptlang.org/tsconfig#outDir"
   },
   "rootDir":{
      "description":"Specify the root folder within your source files.",
      "type":"string",
      "markdownDescription":"Specify the root folder within your source files.\n\nSee more: https://www.typescriptlang.org/tsconfig#rootDir"
   }
}
```

**7.compileOptions (strict)**

>-strict 안에는 엄격한 타입체킹 옵션들이 들어있다.    
-strict를 true로 켜야함다
 
    strict의 옵션들

    /--noImplicitAny/     
    명시적이지 않게 any 타입을 사용하여 , 표현식과 선언에 사용하면 에러를 발생시킨다.   
    타입 스크립트가 추론을 실패한 경우 ,any를 지정하는데 이때 any가 맞다면 any를 명시하도록 강제한다.   
    
    /--noImplicitThis/   
    명시적이지 않게 any 타입을 사용하여 ,this 표현식에 사용하면 ,에어를 발생시킨다.
    
    /--strictNullChecks/   
    모든 타입에 null ,undefind 를 subtype에서 제외 시킨다.   
    만약 들어오는 타입이 null이나 undefind일 수 있다면    
    union타입으로 받아서 null에 대한 예외를 터뜨리는 방식으로 안전하게    
    작성하는 것이 좋다 이를 타입 가드라고도 한다.   
    
    /--strictFunctionTypes/    
    //todo 공변 ,반공변 공부 좀더 필요    
    
    /--strictPropertyInitialization/
    정의도지 않은 클래스의 속성이 생성자에서 초기화되어있는지 확인한다.    
    --strictNullChecks 를 함께 사용해야한다.   
    
    /--strictBindCallApply/    
    bind , call , apply에 대해 더 엄격한 검사를 수행시킨다    
    
    /--alwaysStrict/
    각 소스 파일에 대해 javascript 의 strict mode 로 코드를 분석하고 ,   "use strict"를 해제한다 





```json
"strict": {
    "description": "Enable all strict type checking options.",
    "type": "boolean",
    "default": false,
    "markdownDescription": "Enable all strict type checking options.\n\nSee more: https://www.typescriptlang.org/tsconfig#strict"
},
```


#
## Interface
#

>내부적인 동작은 숨겨져 있고 외부적으로 드러 나는 객체의 사용 방식이 적혀있는 타입

```ts

function hello1(person:{name:string , age:number}) :void{
    console.log('hi im',`${person.name}`)
}

const p1 : {name : string  , age:number} = {
    name:'ugo',
    age:400
};

hello1(p1)

//위와 같은 코드에서 타입을 정의하는 
//{name:string , age:number}가 계속 사용되고 있다. 
//이를 인터페이스로 만들면 아래와 같다.


interface Person1{
    name: string;
    age: number;
}

function hello1(person:Person1) :void{
    console.log('hi im',`${person.name}`)
}

const p1 : Person1 = {
    name:'ugo',
    age:400
};

hello1(p1)  

//인터페이스는 ts에서만 사용된다 .
//즉 컴파일 타임에만 사용된다. 
//js에는 인터페이스가 없기 떄문에
//컴파일된 js 파일에는 아래와 같이 코드가 컴파일된다.

"use strict";
function hello1(person) {
    console.log('hi im', "" + person.name);
}
var p1 = {
    name: 'ugo',
    age: 400
};
hello1(p1);

```

#
### Optional property
#

optioal property 선언 두가지 방식
>1.필드 이름 끝에 '?'를 붙혀 특정 필드를 Optional하게 선언할 수 있다 .   
2.인덱서블 타입을 사용하여 필드 선언

```ts
//1.?표 사용 선언
interface Person2{
    name: string;
    age?: number;
}

function hello2(person:Person2):void {
    console.log(`${person.name}`)
}

//age 는 optional 로 선언되어있기 때문에 있어도 되고 없어도 된다 
hello2({name:'ugo',age:45});
hello2({name:'ugo'});   

//2.indexable type 사용

//아래 인터페이스는
//name 은 required(필수)이며
//age는 optional
//그외에 어떤이름의 필드가 와도 괜찮다는 의미이다
interface Person2{
    name: string;
    age?: number;
    //아래와 같은 것을 indexable type이라고 한다 
    [index: string]:any;
}

function hello2(person:Person2):void {
    console.log(`${person.name}`)
}


hello2({name:'ugo',age:45, male:"man"});
hello2({name:'ugo',age:45});
hello2({name:'ugo'});
```

#
### interface 에 함수 정의
#

```ts
interface Person4{
    name:string;
    age:number;
    hello():void;
}

//인터페이스에 함수를 정의할 수 있는 두가지 방식

//1
const p41:Person4={
    name:'ugo',
    age:40,
    hello :function():void{
        console.log(`hi im ${this.name}`)
    }
}

//2
const p42:Person4={
    name:'ugo',
    age:40,
    //타입스크립트에서는 함수의 첫번째인자로 this를 지정할 수 있다.
    hello (this:Person4):void{
        console.log(`hi im ${this.name}`)
    }
}

// const p43:Person4={
//     name:'ugo',
//     age:40,
//     //화살표 함수일때는 this가 블록안에 없으면 
//     //global this를 가리키기 때문에 사용할 수 없다.
//     hello(this:Person4) : void => {
//         console.log(`hi im ${this.name}`)
//     }
// }

p41.hello();
p42.hello();
```

#
### 인터페이스의 구현 클래스
#

```ts
interface IPerson{
    name: string;
    age?: number;
    hello() :void;
}

class Person implements IPerson{
    name: string;
    age?: number | undefined;

    constructor(name:string){
        this.name = name;
    }

    hello(): void {
        console.log(`${this.name} 입니다`)
    }
    
}

//타입을 인터페이스 타입으로 받는 것이 정확한 표현이다.
const person:IPerson = new Person('ugo');
person.hello();
```

>위의 코드에서 Person은 IPerson을 구현하고 있다 . 
Ide에 인터페이스 구현시 편하게 해당 인터페이스에 필요한 멤버들을 자동 작성해주는 기능이 있다. 


#
### interface 간의 상속
#

```ts
//Ugo는 IPerson2를 상속받고 있다

interface IPerson2{
    name:string;
    age?:number;
}

interface Ugo extends IPerson2{
    city:string;
}

const ugo:Ugo = {
    name:'ugo',
    age:4,
    city:'korea'
}
```
#
### function interface
#

>함수를 인터페이스로 만들어내는 방식이다 함수를 타입으로 사용할 수 있다.

```ts
interface HelloPerson{
    (name:string, age?:number):void;
}
//helloPerson 은 HelloPerson 타입이고 HelloPerson에 정의된 대로 구현해야한다.
const helloPerson : HelloPerson = function(name:string) {
    console.log(`${name}`)
}
//helloPerson을 실행 시킬때 변수의 타입을 따르지
//구현체의 형태를 따르지 않는다. 
//구현체에서는 인터페이스의 구격에 벗어나지 않는한에서 변형이 가능하다.
helloPerson("ugo");
```

#
### readonly property
#

>컴파일 타임에 문제를 잡아내 코드를 제대로 작성하는 것이 목적이다   
한번 할당되고 변경될 일이 없는 필드라면 readonly로 선언하는 것이 좋다 .
```ts
interface Person8{
    name:string;
    age?:number;
    readonly gender: string
}

const p81 : Person8 = {
    name:'ugo',
    gender:'male'
}

//readonly로 선언되어 있어 변경할 수 없다. 
p81.gender = 'female';
```

#
### type alias 와 interface 비교
#

``` ts

//1.함수 선언시 차이

//type alias 
type Eat = (food:string) => void;
//interface
interface Eat{
    (food:string):void;
}

//2.array 선언시 차이
//type alias 
type PersonList = string[];
//interface
interface PersonList {
    [index: number] :string;
}

//3.intersection

interface ErrorHandling {
    success:boolean;
    error?:{message:string};
}

interface ArtistsData{
    artistas:{name:string}[];
}

// type alias
//& 기호로 여러개 티입을 합칠 수 있다.
type ArtistsResponseType = ArtistData & ErrorHandling;

//interface
//다중 상속으로 intersection을 구현할 수 있다.
interface IArtistsResponse extends ArtistsData , ErrorHandling{}

let art: artistsResponsetype;
let iar:IArtistsResponse ;

//4.union type 표현

interface Bird{
    fly():void;
    layEggs():void;
}

interface Fish{
    swim():void;
    layEggs():void;
}

// type alias

type PetType = Bird | Fish;

//interface
//유니언 타입을 상속받거나 구현할 수 없다 . 
interfate IPet extends PetType{} //error
clsss Pet implements PetType{}   //error

```


#
### Declaration Merging
#

>인터페이스에 있는 기능이다 . 이름이 같은 인터페이스는 컴파일시에 하나로 합쳐진다.


```ts
interface Person{
    name:string;
    age:number;
}
interface Person{
    gender:string
}



let ugo:Person;

//아래처럼 참조가 가능하다.
ugo.name
ugo.age
ugo.gender
```


#
## Class
#


>클래스의 특징   
1.class는 object를 만드는 청사진이다.   
2.class 키워드로 클래스를 만들 수 있다.    
3.Javascript 에서도 class 를 es6부터 지원하나  접근제어자등 몇가지 개념이 부족하다    
4.클래스는 OOP를 구현하기 위한 기본적인 개념이다 .   
5.TypeScript에서는 클래스도 하나의 타입이 된다.   
6.class 이름은 보통 대문자로 시작한다   
7.constructor 를 이용해서 object 를 생성하면서 값을 전달할 수 있다 .   
8.this 키워드를 이용해서 만들어진 object 자기 자신을 가리킬 수 있다 .   
9.js로 컴파일 되면 es6 이하 버전에서는 function으로 표현된다.   



#
### constructor(생성자)와 initialize(초기화)
#
 
>1.생성자 함수가 없으면 디폴트 생성자라고 부른다.   
 2.프로그래머가 만든 생성자가 하나라도 있으면 ,디폴트 생성자는 사라진다.   
 3.strict 모드에서는 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당해 줘야한다.    
 4.프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당하지 않는 경우에는 !를 붙여서 위험을 표현한다 .   
 5.클래스의 프로퍼티가 정의되어 있지만 ,값을 대입하지 않으면 런타임에 undefined가 할당된다.   
 6.생성자에는 async를 설정할 수 없다 . 


 #
 ### 접근제어자(Access Modifiers)2
 #

 > 1.접근 제어자에는 public , private , protected가 있다 .   
 2.설정을 하지 않으면 public이다 .     
 3.클래스 내부의 모든 곳에 (생성자 , 프로퍼티 ,메서드 ) 설정 가능하다 .     
 4.private로 설정하면 클래스 외부에서 접근할 수 없다 .   
 5.자바 스크립트에서 private를 지원하지 않아 오래동안 프로퍼티나 메서드 이름 앞에 _를 붙여서 표현했다.  


 #
 ### 생성자에서 초기화
 #

 ```ts
class Person{
    name:string ; 
    age:number;
    public constructor(name:string , age:number){
        this.name = name ;
        this.age = age ;
    }
}

//위의 생성자 코드를 아래처럼 간단하게 쓸수 있다 . 
//생성자 파라미터에 접근제어자를 달면 그 자체가 클래스의 필드로 사용된다.

class Person{
    public constructor(public name:string , pubilc age:number){}
}
 ```


#
### Getter 와 Setter 
#

>필드에 간접적으로 접근하도록 getter(값을 가져오는 메서드),setter(값을 set하는 메서드)를 사용한다. get , set 키워드로 getter, setter 메서드를 생성할 수 있다 .

```ts
class Person7{
    public constructor(private _name:string , public age:number){}
    get name(){
        console.log('getter');
        return this._name
    }
    //setter가 없으면 readOnly가 된다.
    set name(n:string){
        console.log('setter')
        this._name = n;
    }
}

//getter와 setter를 이용해 간접적으로 값을 가져오거나 셋팅한다
const per : Person7 = new Person7("ugo",40);

//get name()이 블러와 진다.
console.log(per.name)
//set name()이 불러와 진다.
per.name = '40';
console.log(per.name)
```

#
### class 프로퍼티의  readOnly
#

> 클래스의 프로퍼티에 readOnly 키워드를 사용하여 생성시점 이외에는 수정할 수   
없도록 할 수 있다.

``` ts
class Person8{
    public readonly name:string = 'ugo';
    
    constructor(){
        this.name = 'hallo';
    }

    //클래스 생성시점 이외에서는 readonly 프로퍼티를 수정할 수 없다.
    public hi(){
        this.name = 'asd';
    }
}
```

#
### class에서의 index Signature 
#

>필드가 동적으로 추가되야할 경우  클래스에서 index Signature를 사용할 수 있다.

```ts
class Person9{
    [index:string] :"male"|"female";
}

const per1 = new Person9();
per1.ugo="male";
per1.uga="female";
per1.toto="male";
//클래스에 index Signature로 정의해 놓은 union 타입에 
//해당하지 않기 때문에 에러가 난다.
per1.yang="남자";

console.log(per1);
```

#
### static 프로퍼티와 , 메서드
#

>클래스를 통해 만들어진 인스턴스에서 공유되는 프로퍼티 혹은 메서드를 static 키워드를   붙혀 만들 수 있다 


```ts
//static 사용 예시

class Person10{
    public static  NAME = "ugo";
    public static hello(){console.log(`hello ${Person10.NAME}`)}

    public changeName(name:string){
        Person10.NAME = name;
    }
    get name(){
        return Person10.name ;
    }
}

const p10:Person10 = new Person10();

const p11:Person10 = new Person10();

//static 필드 혹은 메서드는 해당 클래스로 만들어진 모든 인스턴스에서 공유된다
//인스턴스가 담긴 변수로 참조하는 것이 아니라 
//클래스 자체로 참조한다
//X
//p10.hello();
//O
Person10.hello();
p11.changeName("ulala")
//Person.NAME은 인스턴스 끼리 공유되기 떄문에
//ulala가 출력된다.
Person10.hello();

```



#
## abstract class
#

> 특정 메서드를 추상화할때 abstract를 붙혀 abstract method를 만들어낸다   
abstract method는 abstract class 안에서만 존재할 수 있기 떄문에 abstract method를   
정의하고 싶다면 클래스도 abstract로 선언해줘야 한다  abstract method는 메서드 로직이 들어가는 {}를 붙히지 않는다    
abstract class는 그 자체만으로 생성될 수 없고 이를 구현하는 클래스를 통해 생성이 가능하다 . 


```ts 
//abstract class 정의
abstract class AbstractPerson{
    protected _name: string ='ugo';
    abstract setName(name:string): void;
}

//abstract class 상속
class Person44 extends AbstractPerson{
    setName(name: string): void {
        this._name = name;
    }
}

//class 생성
const p = new Person44();
p.setName('ugo')
console.log(p);

```


#
## Generic Type
#

>위의 두 메서드와 메서드 로직은 같으나 리턴타입 혹은 파라미터의 타입만 바뀌는 것이    
반복된다면 any를 통해 어떤 타입이라도 받을 수 있도록 할 수 있지만    
any는 얘기치 않은 문제들을 발생시킬 수 있기에 이때 any 대신 generic을 사용할 수 있다.   




```ts
function helloString(message: string):string{
    return message;
}

function helloNumber(message: number):number{
    return message;
}

//any type 사용

function hello(message:any) : any {
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
function helloGeneric<T>(message: T): T {
    return message;
}

//T->string
console.log(helloGeneric('helloG!'));
//T->number
console.log(helloGeneric(39))
//T->boolean
console.log(helloGeneric(true));


------------------------------------------------------------

//여러개의 제네릭 타입 사용

function helloG<T, U>(message : T ,comment :U) : T {
    console.log(comment)
    return message ;
}

//함수 사용시 타입을 지정함
helloG<string,number>('ugo',39);
//타입이 추론된다.
//가장 좁은 범위의 타입이 추론되기 떄문에 
//타입은 36이된다. 
helloG(36,40);


------------------------------------------------------------

//array와 tuple에서 generic 사용

function helloArray<T>(message: T[]):T{
    return message[0];
}

console.log(helloArray(['ugo','gogo']));

//배열안의 타입이 여러개이기 때문에 string | number 라는 union 타입이 지정된다.
console.log(helloArray(['hello',5]));


//튜플형태로 데이터가 들어온다면  제네릭으로 튜플의 형태를 지정해 줘야한다.
function helloTuple<T,K>(message:[T,K]):T{
    return message[0];
}

helloTuple(['hello','world']);
helloTuple(['hello',5]);

------------------------------------------------------------

//type 과 interface 에서의 generic 사용

//type 에서 generic 사용 
type HelloFunctionGeneric1 = <T>(message:T)=>T;

const helloF1:HelloFunctionGeneric1 = <T>(message:T) : T =>{
    return message;
}

//interface 에서 generic 사용 
interface HelloFG{
    <T>(message:T):T;
}

const helloF2:HelloFG = <T>(message:T) : T =>{
    return message;
}


------------------------------------------------------------

//class 에서의 generic 사용

//클래스에서 제네릭 타입 사용시 
//제네릭타입의 유효범위는 클래스 전체가 된다.

class Person<T,K>{
    private _name:T;
    private _age:K;
    constructor(name: T , age: K){
        this._name = name;
        this._age = age;
    }
}

console.log(new Person('ugo',123));
//제네릭을 지정해 줬기 떄문에 에러가 뜬다.
//console.log(new Person<string>(123))

console.log(new Person<string,number>('ugo',123))

------------------------------------------------------------

//generic 타입의 상속관계

//T는 string | number이라는 union type을 상속받고 있다
//즉 T는 string | number 만 가능하다.
//사용자가 인지 할 수 있도록
//정말 모든 타입을 받는 코드가 아니라면 
//타입은 가장 작은 범위로 제한되는 것이 좋다 .
class PersonExtends<T extends string | number >{
    private _name : T ; 

    constructor(name:T){
        this._name = name;
    }
}

new PersonExtends('ugo');
new PersonExtends(123);

//boolean은 지정된 union type에 속하지 않음으로 에러가 난다
new PersonExtends(true);

```