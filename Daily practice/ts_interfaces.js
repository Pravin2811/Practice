//Define object structures
function calculateArea(shape) {
    console.log("Calculating area of ".concat(shape.name, "..."));
    console.log("Area: ".concat(shape.area()));
}
var circle = {
    name: "Circle",
    color: "Red",
    area: function () {
        return Math.PI * 2 * 2;
    },
};
calculateArea(circle);
var circle1 = {
    name: 'circle',
    color: "green",
    area: function () {
        return Math.PI * 2 * 2;
    }
};
function calculateArea1(shape) {
    console.log("area of circle is ".concat(shape.area()));
}
calculateArea1(circle1);
