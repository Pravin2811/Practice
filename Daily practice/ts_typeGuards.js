var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.isCreditAllowed = function () {
        return true;
    };
    return Customer;
}());
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    Supplier.prototype.isInShortList = function () {
        return true;
    };
    return Supplier;
}());
function signContract(partner) {
    var message = "";
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }
    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further';
    }
    return message;
}
var customer = new Customer();
var supplier = new Supplier();
console.log(signContract(supplier));
