//Typescript getter and setter
var Student = /** @class */ (function () {
    function Student(age, firstName, lastName) {
        this._age = age;
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            if (theAge > 0 || theAge < 120) {
                this._age = theAge;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var hari = new Student(24, "Hari", "haran");
hari.age = 30;
console.log(hari.age);
