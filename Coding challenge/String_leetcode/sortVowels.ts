//2785. Sort Vowels in a String
//https://leetcode.com/problems/sort-vowels-in-a-string/description/
//Given a 0-indexed string s, permute s to get a new string t such that:
//All consonants remain in their original places. More formally, if there is an index i with 0 <= i < s.length such that s[i] is a consonant, then t[i] = s[i].
//The vowels must be sorted in the nondecreasing order of their ASCII values. More formally, for pairs of indices i, j with 0 <= i < j < s.length such that s[i] and s[j] are vowels, then t[i] must not have a higher ASCII value than t[j].
//Return the resulting string.
//The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in lowercase or uppercase. Consonants comprise all letters that are not vowels.
//Example 1:
//Input: s = "lEetcOde"
//Output: "lEOtcede"
let sInput: string = "lEetcOde"
function sortVowels(s: string): string {
    let vowels: string = "AEIOUaeiou";
    const length: number = s.length;
    let vow: string[] = [];
    for(let i=0; i<length; i++){
        if(vowels.includes(s[i])){
            vow.push(s[i]);
        }
    }

    vow.sort((a,b)=> a.charCodeAt(0) - b.charCodeAt(0));
    let j = 0; 
    let result = "";
    for(let i=0; i<length; i++){
        if(vowels.includes(s[i])){
            result += vow[j++];
        }else{
            result += s[i];
        }
    }
    return result;
};

console.log(sortVowels(sInput));