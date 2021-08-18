class Person5{
    public name:string ="ugo";
    public age:number;
    public constructor(age?:number){
        if(age === undefined){
            this.age = 20;
        }else{
            this.age = age;
        }
    }

}