function columnNumber(input: string): number{
    let output: number = 0;
    const length: number = input.length;
    for(let i=0; i<length; i++){
        let value = input.charCodeAt(i);
        const valueOfA = "A".charCodeAt(0);
        if(value >= valueOfA && value <= (valueOfA + 25)){
            let result = value - 64;
            output = output * 26 + result;
        }else{
            return -1;
        }
    }
    return output; 
    //return output < maxOutput ? output : -1;
};

// let maxStringInput = "FXSHRXW";
// let maxOutput = columnNumber(maxStringInput);

// function columnNumberMax(input: string): number{
//     let maxStringInput = "FXSHRXW";
//     let maxOutput = columnNumber(maxStringInput);
//     let output = columnNumber(input);
//     return output <= maxOutput ? output : -1;
// }

console.log(columnNumber("ZY"));