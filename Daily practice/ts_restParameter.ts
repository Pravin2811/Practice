//Rest parameter
function orderPizza(size, ...toppings:string[]) {
    console.log(`Ordered a ${size} pizza with the following toppings: ${toppings.join(', ')}`);
}

orderPizza('large', 'pepperoni');

orderPizza('medium', 'mushrooms', 'onions', 'olives', 'extra cheese');
