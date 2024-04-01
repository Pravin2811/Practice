//Typescript never
function err(message: string){
    throw new Error(message);
}

let loop = function forever(){
    while(true){
        console.log("Hello");
    }
};

//Typescript union
function addd(a: number | string, b: number | string): number | string | boolean {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

