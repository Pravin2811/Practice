//1816. Truncate Sentence
//https://leetcode.com/problems/truncate-sentence/description/
//A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).
//For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
//You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.
//Example 1:
//Input: s = "Hello how are you Contestant", k = 4
//Output: "Hello how are you"
let str: string = "Hello how are you Contestant";
let k: number = 4;
function truncateSentence(s: string, k: number): string {
    return s.split(" ").slice(0, k).join(" ");
    // let arr: string[] = s.split(" ");
    // //let strOutput = arr.join(" ").substring(0, k);
    // let strOutput: string = "";
    // for(let i=0; i<k; i++){
    //     strOutput +=  arr[i] + " ";
    // }

    // return strOutput.trim();
};

console.log(truncateSentence(str, k));