var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
function highlight(strings) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var result = '';
    strings.forEach(function (string, i) {
        result += string;
        if (values[i]) {
            result += "<span style=\"background-color: yellow\">".concat(values[i], "</span>");
        }
    });
    return result;
}
var namee = 'John';
var age = 30;
var profession = 'developer';
var output = highlight(__makeTemplateObject(["Hello, my name is ", ", I am ", " years old, and I work as a ", "."], ["Hello, my name is ", ", I am ", " years old, and I work as a ", "."]), namee, age, profession);
console.log(output);
console.log("yes coming");
function myTag(strings) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    // Process strings and values here
    console.log(strings, values);
}
var result = myTag(__makeTemplateObject(["The sum of ", " and ", " is ", "."], ["The sum of ", " and ", " is ", "."]), 10, 20, 30);
