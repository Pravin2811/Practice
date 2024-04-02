//917. Reverse Only Letters
//https://leetcode.com/problems/reverse-only-letters/description/
//Given a string s, reverse the string according to the following rules:
//All the characters that are not English letters remain in the same position.
//All the English letters (lowercase or uppercase) should be reversed.
//Return s after reversing it.
//Example 1:
//Input: s = "ab-cd"
//Output: "dc-ba"
let s: string = "ab-cD";
function reverseOnlyLetters(s: string): string {
    let left = 0;
    let right = s.length - 1;
    const newStr = s.split('');
    
    while (left < right) {
        const charCodeLeft = newStr[left].toLowerCase().charCodeAt(0);
        const charCodeRight = newStr[right].toLowerCase().charCodeAt(0);
        
        if (charCodeLeft < 97 || charCodeLeft > 122) {
            left++;
            continue;
        }
        
        if (charCodeRight < 97 || charCodeRight > 122) {
            right--;
            continue;
        }
        
        [newStr[left], newStr[right]] = [newStr[right], newStr[left]];
        right--;
        left++;
    }
    
    return newStr.join('')
};

console.log(reverseOnlyLetters(s));