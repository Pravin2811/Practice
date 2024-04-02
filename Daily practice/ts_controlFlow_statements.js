//Typescript if statement
var max = 100;
var counter = 100;
if (counter < max) {
    counter++;
}
else {
    counter = 1;
}
console.log(counter);
var discount;
var itemCount = 11;
if (itemCount > 0 && itemCount <= 5) {
    discount = 5;
}
else if (itemCount > 5 && itemCount <= 10) {
    discount = 10;
}
else {
    discount = 15;
}
console.log("You got ".concat(discount, "% discount. "));
//Typescript switch case
// change the month and year
var month = 2, year = 2020;
var day = 0;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        day = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        day = 30;
        break;
    case 2:
        if (((year % 4 == 0) &&
            !(year % 100 == 0))
            || (year % 400 == 0))
            day = 29;
        else
            day = 28;
        break;
    default:
        throw Error('Invalid month');
}
console.log("The month ".concat(month, " in ").concat(year, " has ").concat(day, " days"));
//Typescript for loop
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
var i = 0;
for (;;) {
    console.log(i);
    i++;
    if (i > 9)
        break;
}
