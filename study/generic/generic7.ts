//keyof 

interface IPerson{
    name:string;
    age:number;
}


const person:IPerson = {
    name:'ugo',
    age:500
}

//keyof 키워드는 뒤에 붙는 개체의 프로퍼티를 유니언타입으로 만들어 낸다
//아래의 Keys는 name|age 의 유니언타입이다.
type Keys = keyof IPerson;


function getProp1(obj:IPerson,key:Keys): IPerson[Keys]{
    return obj[key];
}

function getProp2<T,K extends keyof T>(obj:T, key:K):T[K]{
    return obj[key];
}

const b = person["name"];
console.log(b);

const a = getProp2(person,"age");
console.log(a);




// function setProp1(obj:IPerson,key:Keys,value:string|number) {
//     obj[key] = value;
// }

// function setProp2(obj:IPerson,key:Keys,value:string|number) {
//     obj[key] = value;
// }
