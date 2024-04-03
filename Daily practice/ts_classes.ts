//Typescript constructor function
// function Person(ssn, firstName, lastName){
//     this.ssn = ssn;
//     this.firstName = firstName;
//     this.lastName = lastName;
// };

// Person.prototype.getFullName = function (){
//     return `${this.firstName} ${this.lastName}`;
// };

// let person = new Person('343243', "John", "doe");
// console.log(person.getFullName());

//Typescript ES6 class definition
class Person{
    readonly ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string){
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person = new Person("5435435", "Hello", "hi");
console.log(person.getFullName());
console.log(person.ssn);