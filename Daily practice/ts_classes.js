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
var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName, salary) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.getSalary = function () {
        return this.salary;
    };
    Person.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    return Person;
}());
var person = new Person("5435435", "Sylesh", "kumar", 15000);
console.log(person.getFullName());
console.log(person.ssn);
console.log(person.salary);
console.log(person.getSalary());
