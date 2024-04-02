//917. Reverse Only Letters
//https://leetcode.com/problems/reverse-only-letters/description/
//Given a string s, reverse the string according to the following rules:
//All the characters that are not English letters remain in the same position.
//All the English letters (lowercase or uppercase) should be reversed.
//Return s after reversing it.
//Example 1:
//Input: s = "ab-cd"
//Output: "dc-ba"
var s = "ab-cD";
function reverseOnlyLetters(s) {
    var _a;
    var left = 0;
    var right = s.length - 1;
    var newStr = s.split('');
    while (left < right) {
        var charCodeLeft = newStr[left].toLowerCase().charCodeAt(0);
        var charCodeRight = newStr[right].toLowerCase().charCodeAt(0);
        if (charCodeLeft < 97 || charCodeLeft > 122) {
            left++;
            continue;
        }
        if (charCodeRight < 97 || charCodeRight > 122) {
            right--;
            continue;
        }
        _a = [newStr[right], newStr[left]], newStr[left] = _a[0], newStr[right] = _a[1];
        right--;
        left++;
    }
    return newStr.join('');
}
;
console.log(reverseOnlyLetters(s));
