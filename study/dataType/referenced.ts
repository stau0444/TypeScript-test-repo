 //----------object----------
/*
    1.primitive type이 아닌것 을 나타내고 싶을때 사용한다 
    2.
*/

//타입스크립트에서 person1 은 Object타입이 아니다
//person1 은 {name : 'ugo' , age:400}
//타입이고 이를 오브젝트 리터럴 타입이라한다.
//const person1: = {name : 'ugo' , age:400}

const person2 = Object.create({
    name:'ugo',
    age:400
})

//console.log(typeof person1)
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

// if(typeof a !== 'string'){
//     a;
// } 

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
// //error
// if(typeof vo === 'void'){

// }

if(typeof und === 'undefined'){

}


function f4(a:number){
    if(a>0){
        return a * 38;
    }
}

console.log(f4(5)) // 190
//console.log(f4(-5)+5) //NaN





