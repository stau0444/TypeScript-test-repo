abstract class AbstractPerson{
    protected _name: string ='ugo';
    abstract setName(name:string): void;
}

class Person44 extends AbstractPerson{
    setName(name: string): void {
        this._name = name;
    }
}

const p = new Person44();
p.setName('ugo')

console.log(p);

