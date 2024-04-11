var apps = ['WhatsApp', 'Instagram', 'Facebook'];
var playStore = [];
apps.forEach(function (item) {
    item += "data";
    playStore.push(item);
});
console.log(playStore);
var Pigeon = /** @class */ (function () {
    function Pigeon() {
        this.sound = "coos";
    }
    return Pigeon;
}());
var Owl = /** @class */ (function () {
    function Owl() {
        this.sound = "hoots";
    }
    return Owl;
}());
var Penguin = /** @class */ (function () {
    function Penguin() {
        this.sound = "peeps";
    }
    Penguin.prototype.swim = function () {
        console.log("I'm a bird and i can swim");
    };
    return Penguin;
}());
var pigeon = new Owl(); // Works 
var owl = new Pigeon(); // Works 
var pigeon2 = new Penguin(); // Works 
//let penguin: Penguin = new Pigeon(); // Compile time error 
// Printing values 
console.log("A pigeon " + pigeon.sound);
console.log("An owl " + owl.sound);
console.log("A pigeon " + pigeon2.sound);
//console.log("A penguin " + penguin.sound);   
var greet;
greet = function (x, y) {
    return x + y;
};
console.log(greet("1", "3"));
var employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
console.log(Object.keys(employee), Object.values(employee));
