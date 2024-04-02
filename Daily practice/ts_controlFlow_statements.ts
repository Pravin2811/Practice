//Typescript if statement
const max = 100;
let counter = 100;

if (counter < max) {
    counter++;
} else {
    counter = 1;
}

console.log(counter);


let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
    discount = 5;  
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10;  
} else {
    discount = 15;
}

console.log(`You got ${discount}% discount. `)


//Typescript switch case
// change the month and year
let month = 2,
    year = 2020;

let day = 0;
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

console.log(`The month ${month} in ${year} has ${day} days`);


//Typescript for loop
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

let i = 0;
for (; ;) {
    console.log(i);
    i++;
    if (i > 9) break;
}


//Typescript while
let counterVar = 0;

while (counterVar < 5) {
    console.log(counterVar);
    counterVar++;
}


//Typescript Do While
let ij = 0;

do {
    console.log(ij);
    ij++
} while (ij < 10);
