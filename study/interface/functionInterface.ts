
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


interface Person{
    name:string;
    age?:number;
}
interface Person{
    gender:string
}

let ugo4:Person;

