//Typescript inference
let arr = [new Date(), new RegExp('\d+')];

console.log(arr);

function addd(x: number, y: number){
    return "" + x + y + " ";
}

console.log(addd(8, 10));