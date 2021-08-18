//아래 인터페이스는
//name 은 required(필수)이며
//age는 optional
//그외에 다른 필드는 어떤것이든 허용하고 있다.
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


