var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Typescript Inheritance
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.describe = function () {
        return "This is ".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
;
var person1 = new Person("hari", "haran");
//console.log(person1.firstName);
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, age, degree) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.age = age;
        _this.degree = degree;
        return _this;
    }
    Student.prototype.getFullDetails = function () {
        return {
            firstName: this.firstName,
            lastName: this.getLastName(), //this.lastName,
            age: this.age,
            degree: this.degree
        };
    };
    Student.prototype.getLastName = function () {
        return "".concat(this.lastName);
    };
    Student.prototype.describe = function () {
        return _super.prototype.describe.call(this);
        //return `This is ${this.firstName} ${this.lastName} ${this.age}`;
    };
    return Student;
}(Person));
// let hari = new Student("Hari", "haran", 22, "Diploma");
// console.log(hari.getFullDetails());
// console.log(hari.getLastName());
// console.log(hari.age);
var kumar = new Student("Ajay", "kumar", 23, "Diploma");
console.log(kumar.describe());
