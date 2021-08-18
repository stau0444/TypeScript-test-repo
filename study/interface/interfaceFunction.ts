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

