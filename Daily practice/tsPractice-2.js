//Typescript Array
var arr;
arr = ["Hello", 34, "welcome"];
console.log(arr);
//Typescript Tuple
var tuple = [0, 255, 255, 1];
console.log(tuple);
//Typescript Enum
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
;
function isItSummer(month) {
    var isSummer;
    switch (month) {
        case Month.Apr:
        case Month.May:
        case Month.Jun:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log(isItSummer(10));
//Typescript any
var result;
result = 10.123;
console.log(result.toFixed());
//result.willExist();
//Typescript void
function add(x, y) {
    console.log(x + y);
}
