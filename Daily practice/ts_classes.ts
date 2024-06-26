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


class Person1{
    ssn: string;
    firstName: string;
    lastName: string;
    private salary: number;

    constructor(ssn: string, firstName: string, lastName: string, salary: number){
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    get getSalary(): number{
        return this.salary;
    }

    set setSalary(salary: number){
        this.salary = salary;
    }
}

let person = new Person1("5435435", "Sylesh", "kumar", 15000);
console.log(person.getFullName());
console.log(person.ssn);
//console.log(person.salary);
console.log(person.getSalary);