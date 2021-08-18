class Person8{
    public readonly name:string = 'ugo';
    
    constructor(){
        this.name = 'hallo';
    }

    //클래스 생성시점 이외에서는 readonly 프로퍼티를 수정할 수 없다.
    public hi(){
        this.name = 'asd';
    }
}