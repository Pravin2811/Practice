//Typescript function
var add = function (x, y) {
    return x + y;
};
console.log(add(8, 4));
//Typescript optional parameter functions
function multiply(a, b, c) {
    // if(c !== undefined){
    //     return a*b*c;
    // }
    return a * b;
}
console.log(multiply(5, 4, 9));
//Typescript Default parameters
function divide(a, b) {
    if (b === void 0) { b = 2; }
    return a / b;
}
console.log(divide(10));
var promotion; //= 
// function(price: number, discount=0.05){
//     return price*discount;
// }
promotion = function (price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * discount;
};
console.log(promotion(1000, undefined));
//Typescript rest parameter
function getTotal(a) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
console.log(getTotal(1));
console.log(getTotal(10));
console.log(getTotal(10, 20));
console.log(getTotal(10, 20, 30, 40, 50));
function sum(a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
}
