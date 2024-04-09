//Typescript Inheritance
class Person5{
    firstName: string;
    protected lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string{
        return `${this.firstName} ${this.lastName}`;
    }

    describe(): string{
        return `This is ${this.firstName} ${this.lastName}`
    }

    // getLastName(): string{
    //     return `${this.lastName}`;
    // }
};

let person5 = new Person5("hari", "haran");
//console.log(person1.firstName);

class Student2 extends Person5{
    age: number;
    degree: string;

    constructor(firstName: string, lastName: string, age: number, degree: string){
        super(firstName, lastName);
        this.age = age;
        this.degree = degree;
    }

    getFullDetails(): object{
        return {
            firstName: this.firstName,
            lastName: this.getLastName(),//this.lastName,
            age: this.age,
            degree: this.degree
        }
    }

    getLastName(): string{
        return `${this.lastName}`;
    }

    describe(): any{
        //return super.describe();
        return `This is ${this.firstName} ${this.lastName} ${this.age}`;
    }
}

// let hari = new Student("Hari", "haran", 22, "Diploma");
// console.log(hari.getFullDetails());
// console.log(hari.getLastName());
// console.log(hari.age);
let kumarr = new Student2("Ajay", "kumar", 23, "Diploma");
console.log(kumarr.describe());