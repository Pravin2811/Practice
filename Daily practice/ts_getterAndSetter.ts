//Typescript getter and setter
class Student1{
    _age;
    private _firstName;
    private _lastName;

    constructor(age, firstName, lastName){
        this._age = age;
        this._firstName = firstName;
        this._lastName = lastName;
    }

    public get age(){
        return this._age;
    }

    public set age(theAge: number){
        if(theAge > 0 || theAge < 120){
            this._age = theAge;
        }
    }
}

let hari = new Student1(24, "Hari", "haran");
hari.age = 30;
console.log(hari.age);