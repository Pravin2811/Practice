//2864. Maximum Odd Binary Number
//https://leetcode.com/problems/maximum-odd-binary-number/description/
//You are given a binary string s that contains at least one '1'.
//You have to rearrange the bits in such a way that the resulting binary number is the maximum odd binary number that can be created from this combination.
//Return a string representing the maximum odd binary number that can be created from the given combination.
//Note that the resulting string can have leading zeros.
//Example 1:
//Input: s = "010"
//Output: "001"
var s = "0101";
function maximumOddBinaryNumber(s) {
    var length = s.length;
    var count = 0;
    for (var i = 0; i < length; i++) {
        if (s[i] === '1') {
            count++;
        }
    }
    console.log(count);
    var out = "";
    for (var j = 0; j < length - 1; j++) {
        if (count > 1) {
            out += '1';
            count--;
        }
        else {
            out += '0';
        }
    }
    out = out + '1';
    return out;
}
;
console.log(maximumOddBinaryNumber(s));
