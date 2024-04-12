function columnNumber(input) {
    var output = 0;
    var length = input.length;
    for (var i = 0; i < length; i++) {
        var result = input.charCodeAt(i) - 64;
        output = output * 26 + result;
    }
    return output;
}
;
console.log(columnNumber("ZY"));
