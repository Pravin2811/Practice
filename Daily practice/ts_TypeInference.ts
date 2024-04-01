//Typescript inference
let arr = [new Date(), new RegExp('\d+')];

console.log(arr);

function add(x: number, y: number){
    return "" + x + y + " ";
}

console.log(add(8, 10));