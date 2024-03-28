//1108. Defanging an IP Address
//https://leetcode.com/problems/defanging-an-ip-address/description/
//Given a valid (IPv4) IP address, return a defanged version of that IP address.
//A defanged IP address replaces every period "." with "[.]".
//Example 1:
//Input: address = "1.1.1.1"
//Output: "1[.]1[.]1[.]1"
let address: string = "1.1.1.1";
function defangIPaddr(address: string): string {
    const length: number = address.length;
    const strReplace: string = "[.]";
    let output: string = "";
    for(let i=0; i<length; i++){
        if(address.charAt(i) === '.'){
            output += strReplace;
        }else{
            output += address.charAt(i);
        }
    } 
    return output;
};

//using Regex
// function defangIPaddr(address: string): string {
//     return address.replace(/\./g, "[.]")
// };
console.log(defangIPaddr(address));

//771. Jewels and Stones
//https://leetcode.com/problems/jewels-and-stones/description/
//You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
//Letters are case sensitive, so "a" is considered a different type of stone from "A".
//Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
let jewels: string = "aA", stones: string = "aAAbbb";
function numJewelsInStones(jewels: string, stones: string): number {
    const jewelLength: number = jewels.length;
    const stonesLength: number = stones.length;
    let count: number = 0;
    for(let i=0; i<jewelLength; i++){
        for(let j=0; j<stonesLength; j++){
            if(jewels.charAt(i) === stones.charAt(j)){
                count++;
            }
        }
    }
    return count;
};

console.log(numJewelsInStones(jewels, stones));

//2942. Find Words Containing Character
//https://leetcode.com/problems/find-words-containing-character/description/
//You are given a 0-indexed array of strings words and a character x.
//Return an array of indices representing the words that contain the character x.
//Note that the returned array may be in any order.
//Example 1:
//Input: words = ["leet","code"], x = "e"
//Output: [0,1]
//Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
let words: string[] = ["abc","bcd","aaaa","cbc"];
let x: string = "a";
function findWordsContaining(words: string[], x: string): number[] {
    const wordsLength: number = words.length;
    let output: number[] = [];
    for(let i=0; i<wordsLength; i++){
        let isPresent: boolean = isCharPresent(words[i], x);
        if(isPresent){
            output.push(i);
        }
    }

    return output;
};

function isCharPresent(input: string, x: string): boolean{
    const strLength: number = input.length;
    for(let i=0; i<strLength; i++){
        if(input.charAt(i) === x){
            return true;
        }
    }
    return false;
};

console.log(findWordsContaining(words, x));

//2114. Maximum Number of Words Found in Sentences
//https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/description/
//A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
//You are given an array of strings sentences, where each sentences[i] represents a single sentence.
//Return the maximum number of words that appear in a single sentence.
//Example 1:
//Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
//Output: 6
let sentences: string[] = ["please wait", "continue to fight", "continue to win"];
function mostWordsFound(sentences: string[]): number {
    let maxWords: number = 0;
    const length: number = sentences.length;
    for(let i=0; i<length; i++){
        let max = sentences[i].split(' ').length;
        if(max > maxWords){
            maxWords = max;
        }
    }
    return maxWords;
};

console.log(mostWordsFound(sentences));

//2108. Find First Palindromic String in the Array
//https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/
//Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".
//A string is palindromic if it reads the same forward and backward.
//Example 1:
//Input: words = ["abc","car","ada","racecar","cool"]
//Output: "ada"
let words1: string[] = ["notapalindrome","racecar"];
function firstPalindrome(words: string[]): string {
    for(let word of words){
        if(checkPalindrome(word)){
            return word;
        }
    }

    return "";
};

function checkPalindrome(a: string){
    let strLength: number = a.length;

    let start = 0;
    let end = strLength-1;
    while(start <= end){
        if(a.charAt(start) !== a.charAt(end)){
            return false;
        };
        start++;
        end--;
    }

    return true;
};

console.log(firstPalindrome(words1));

//2125. Number of Laser Beams in a Bank
//https://leetcode.com/problems/number-of-laser-beams-in-a-bank/description/
//Anti-theft security devices are activated inside a bank. You are given a 0-indexed binary string array bank representing the floor plan of the bank, which is an m x n 2D matrix. bank[i] represents the ith row, consisting of '0's and '1's. '0' means the cell is empty, while'1' means the cell has a security device.
//There is one laser beam between any two security devices if both conditions are met:
//The two devices are located on two different rows: r1 and r2, where r1 < r2.
//For each row i where r1 < i < r2, there are no security devices in the ith row.
//Laser beams are independent, i.e., one beam does not interfere nor join with another.
//Return the total number of laser beams in the bank.
//Example 1:
//Input: bank = ["011001","000000","010100","001000"]
//Output: 8
let bank: string[] = ["011001","000000","010100","001000"];
function numberOfBeams(bank: string[]): number {
    let beams: number[] = [];
    const bankLength: number = bank.length;
    for(let i=0; i<bankLength; i++){
        let count: number = countOfSecurityDevice(bank[i]);
        if(count !== 0){
            beams.push(count);
        }
    }

    const beamsLength: number = beams.length;
    let numberOfTotalBeams: number = 0;
    for(let j=0; j<beamsLength-1; j++){
        numberOfTotalBeams += beams[j] * beams[j+1];
    }

    return numberOfTotalBeams;
};

function countOfSecurityDevice(input: string): number{
    const strLength: number = input.length;
    let count: number = 0;
    for(let i=0; i<strLength; i++){
        if(input.charAt(i) === '1'){
            count++;
        }
    }
    return count;
};

console.log(numberOfBeams(bank));