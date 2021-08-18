class Person10{
    public static  NAME = "ugo";
    public static hello(){console.log(`hello ${Person10.NAME}`)}

    public changeName(name:string){
        Person10.NAME = name;
    }
    get name(){
        return Person10.name ;
    }
}

const p10:Person10 = new Person10();

const p11:Person10 = new Person10();

//static 필드 혹은 메서드는 해당 클래스로 만들어진 모든 인스턴스에서 공유된다
//인스턴스가 담긴 변수로 참조하는 것이 아니라 
//클래스 자체로 참조한다
//X
//p10.hello();
//O
Person10.hello();
p11.changeName("ulala")
//Person.NAME은 인스턴스 끼리 공유되기 떄문에
//ulala가 출력된다.
Person10.hello();

