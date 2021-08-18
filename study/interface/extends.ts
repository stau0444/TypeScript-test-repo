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