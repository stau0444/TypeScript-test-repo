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