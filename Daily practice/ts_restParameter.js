//Rest parameter
function orderPizza(size) {
    var toppings = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        toppings[_i - 1] = arguments[_i];
    }
    console.log("Ordered a ".concat(size, " pizza with the following toppings: ").concat(toppings.join(', ')));
}
orderPizza('large', 'pepperoni');
orderPizza('medium', 'mushrooms', 'onions', 'olives', 'extra cheese');
orderPizza('medium', ['onions', 'olives']);
