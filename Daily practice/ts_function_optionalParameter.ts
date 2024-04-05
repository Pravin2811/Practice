//Typescript function
let addd: (a: number, b: number) => number = 
    function (x: number, y: number) {
        return x + y;
    }

console.log(addd(8, 4));

//Typescript optional parameter functions
function multiply(a: number, b: number, c?:number): number{
    if(c !== undefined){
        return a*b*c;
    }

    return a*b;
}

console.log(multiply(5, 4, 9));

//Typescript Default parameters
function divide(a: number, b=2): number{
    return a / b;
}

console.log(divide(10));

let promotion: (price: number, discount) => number; //= 
    // function(price: number, discount=0.05){
    //     return price*discount;
    // }
promotion = function(price:number, discount=0.05){
    return price*discount;
}

console.log(promotion(1000,undefined));

//Typescript rest parameter
function getTotal( a: number, ...numbers: number[]): number{
    let total = 0;
    numbers.forEach(num => total += num);
    return total;
}

console.log(getTotal(1,...[10,20]));
console.log(getTotal(10));
console.log(getTotal(10, 20));
console.log(getTotal(10, 20, 30, 40, 50));

//Typescript function overloading
function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number,): number {
    if (c) return a + b + c;
    return a + b;
}



function addAny(a: any, b: any): any {
    return a + b;
}
 
console.log(addAny(5, 6))