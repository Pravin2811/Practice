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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log('Eating...');
    };
    Animal.prototype.bark = function () {
        console.log('bark!');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof!');
    };
    Dog.prototype.sleep = function () {
        console.log('sleep!');
    };
    return Dog;
}(Animal));
//const animal: Animal = new Dog();
//const dog = animal as Dog;
//animal.eat();
//const animal: Animal = new Dog();
//const animal = dog as Animal;
//dog.bark();
//const dog: Dog = new Animal();
// 1. any and unknown
var stringVariable = 'string';
var anyVariable;
var unknownVariable;
//anyVariable = stringVariable;
//unknownVariable = stringVariable
stringVariable = anyVariable;
console.log(stringVariable);
