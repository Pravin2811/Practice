// Write a program that reads an array of int and outputs the maximum product
// of two adjacent elements in the given array of numbers.
// Sample O/P:
// Enter number of number to find the product..
// 4
// Enter 4 numbers
// 9
// 9
// 4
// 5
// The maximum product: 81
let intArray: number[] = [9,9,4,5];
function maxProduct(input: number[]): number{
    let max: number = 1;
    const length: number = input.length;
    for(let j=0; j<length-1; j++){
        let output: number = input[j] * input[j+1];
        if(output > max){
            max = output;
        }
    }

    return max;
}

console.log(maxProduct(intArray));

// Write a program that reads an array of ints and outputs the length of the
// longest sequence in strictly ascending order. Print the elements of longest
// ascending sequence in an array Elements of the sequence must go one after
// another. A single number is assumed to be an ordered sequence with the length= 1.
// Enter the number of elements 
// 5
// Enter 5 numbers in any order to find the longest ascending sequence
// 45
// 40
// 0
// 39
// 10
// The max value is : 2
// 2numbers in ascending order
// 0 39    
let seqArray: number[] = [34, 1, 12, 0, 45, 54, 65]; //[45, 40, 0, 39, 10];
// function longAscSequence(input: number[]): void{
//     let start: number = -1;
//     let end: number = -1;
//     const length: number = input.length;
//     for(let i=0; i<length; i++){
//         if(input[i] < input[i+1] && input[i] < input[i-1] && start === -1){
//             start = i;
//             end = i;
//             console.log(input[i]);
//         }else if(input[i] > input[i+1] && input[i] > input[i-1] || input[i] > input[i-1] && i === length-1){
//             end = i;
//             console.log(input[i]);
//         }else if(input[i] > input[i-1] && input[i] < input[i+1]){
//             console.log(input[i]);
//         }
//     }

//     //console.log(start, end);
//     console.log(`The max value is ${end - start + 1}`);
// }

function longAscSequence(input: number[]): void{
    let max = 1;
    let currentLength = 1;
    let longestSeqIndex = 0;
    let currentIndex = 0;

    for (let i = 1; i < input.length; i++) {
        if (input[i] > input[i - 1]) {
            currentLength++;
        } else {
            if (currentLength > max) {
                max = currentLength;
                longestSeqIndex = currentIndex;
            }
            currentLength = 1;
            currentIndex = i;
        }
    }

    if (currentLength > max) {
        max = currentLength;
        longestSeqIndex = currentIndex;
    }

    console.log(`The max value is ${max}`);

    for (let i = longestSeqIndex; i < longestSeqIndex + max; i++) {
        console.log(input[i]);
    };
}

longAscSequence(seqArray);