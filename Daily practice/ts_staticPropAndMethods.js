//Typescript static 
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        Employee.headCount++;
    }
    Employee.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Employee.prototype.describe = function () {
        return "This is ".concat(this.firstName, " ").concat(this.lastName);
    };
    Employee.getEmployeeCount = function () {
        return Employee.headCount;
    };
    Employee.headCount = 0;
    return Employee;
}());
;
var ap = new Employee("ap", "ap");
var vp = new Employee("vp", "vp");
//Employee.headCount++;
console.log(Employee.getEmployeeCount());
