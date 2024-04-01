//Typescript never
function err(message) {
    throw new Error(message);
}
var loop = function forever() {
    while (true) {
        console.log("Hello");
    }
};
//Typescript union
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
