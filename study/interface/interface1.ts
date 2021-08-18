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