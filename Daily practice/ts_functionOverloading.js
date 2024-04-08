function payment(paymentMode) {
    if (typeof paymentMode === 'string') {
        return true;
    }
    else if (typeof paymentMode === 'number') {
        return true;
    }
    return false;
}
console.log(payment('upi'));
function addItems(itemName, quantity) {
    if (quantity) {
        return "".concat(itemName, " ").concat(quantity);
    }
    return "".concat(itemName);
}
console.log(addItems("Choco", 5));
function addItems1(itemName, quantity) {
    if (quantity) {
        return "".concat(itemName, " ").concat(quantity);
    }
    return "".concat(itemName);
}
console.log(addItems1("Choco", 5));
