## TypeScript 
#

>공식 문서에서 TypeScript는 타입이란 개념을을 추가해서 자바스크립트를 확장하며
TypeScript compiler 를 통해 plain javascript로 컴파일되어  코드를 실행하기 전에 에러를 잡을 수 있어 에러를 잡는데 사용되는 시간을 줄여주고 , 어떤 브라우저나 OS , 자바스크립트 실행환경에서도 실행된다고 써 있다 

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
## VScode에서의 TypeScipt
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

TypeScript: static types (개발시에 타입체크)

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
//타입 체크가 개발시에 일어난다
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

-Boolean , Number, String , Null , Undifined , Symbol ,Array ,Object

4.프로그래밍을 도울 타입들

-Any , Void , Never , Unknown
-Enum(열거형)
-Tuple(여러개 타입을 받을때 사용)


#
### 1. Primitive Type
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





