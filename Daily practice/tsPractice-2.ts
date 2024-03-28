//Typescript Array
let arr: (string | number)[];
arr = ["Hello", 34, "welcome"];
console.log(arr);

let array1: number[] = [3, 6, 2, 8, 9];
console.log(array1.length);
console.log(array1[2]);

//Typescript Tuple
let tuple: [number, number, number, number?] = [0, 255, 255, 1];
console.log(tuple);

//Typescript Enum
enum Month{
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};

function isItSummer(month: Month){
    let isSummer: boolean;
    switch(month){
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
let result: any;
result = 10.123;
console.log(result.toFixed());
//result.willExist();

//Typescript void
function add(x: number, y:number): void{
    console.log(x+y);
}