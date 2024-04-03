//1684. Count the Number of Consistent Strings
//https://leetcode.com/problems/count-the-number-of-consistent-strings/description/
//You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
//Return the number of consistent strings in the array words.
//Example 1:
//Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
//Output: 2
let allowed: string = "ab";
let words: string[] = ["ad","bd","aaab","baa","badab"];
function countConsistentStrings(allowed: string, words: string[]): number {
    let count = 0;
    for (let word of words) {
        let wordArr = word.split("");

        if (wordArr.every((e) => allowed.includes(e))) {
            count++;
        }
    }

    return count;
};

console.log(countConsistentStrings(allowed, words));