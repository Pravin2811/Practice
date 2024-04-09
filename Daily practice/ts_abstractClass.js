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
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Vehicle.type = "bs6";
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.start = function () {
        console.log("".concat(this.year, " ").concat(this.make, " ").concat(this.model, " started."));
    };
    Car.prototype.stop = function () {
        console.log("".concat(this.year, " ").concat(this.make, " ").concat(this.model, " stopped."));
    };
    Car.prototype.accelerate = function () {
        console.log("".concat(this.year, " ").concat(this.make, " ").concat(this.model, " is accelerating."));
    };
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Truck.prototype.start = function () {
        console.log("".concat(this.year, " ").concat(this.make, " ").concat(this.model, " started."));
    };
    Truck.prototype.stop = function () {
        console.log("".concat(this.year, " ").concat(this.make, " ").concat(this.model, " stopped."));
    };
    Truck.prototype.accelerate = function () {
        console.log("".concat(this.year, " ").concat(this.make, " ").concat(this.model, " is accelerating."));
    };
    return Truck;
}(Vehicle));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Motorcycle.prototype.start = function () {
        console.log("".concat(this.year, " ").concat(this.make, " ").concat(this.model, " started."));
    };
    Motorcycle.prototype.stop = function () {
        console.log("".concat(this.year, " ").concat(this.make, " ").concat(this.model, " stopped."));
    };
    Motorcycle.prototype.accelerate = function () {
        console.log("".concat(this.year, " ").concat(this.make, " ").concat(this.model, " is accelerating."));
    };
    return Motorcycle;
}(Vehicle));
var car = new Car('Toyota', 'Corolla', 2020);
car.start();
car.accelerate();
car.stop();
console.log(Vehicle.type);
