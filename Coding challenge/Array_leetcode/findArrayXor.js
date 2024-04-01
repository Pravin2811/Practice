//2433. Find The Original Array of Prefix Xor
//https://leetcode.com/problems/find-the-original-array-of-prefix-xor/description/
//You are given an integer array pref of size n. Find and return the array arr of size n that satisfies:
//pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].
//Note that ^ denotes the bitwise-xor operation.
//It can be proven that the answer is unique.
//Example 1:
//Input: pref = [5,2,0,3,1]
//Output: [5,7,2,3,2]
var pref = [5, 2, 0, 3, 1];
function findArray(pref) {
    var arr = [];
    arr[0] = pref[0];
    var length = pref.length;
    for (var i = 1; i < length; i++) {
        arr[i] = pref[i - 1] ^ pref[i];
    }
    return arr;
}
;
console.log(findArray(pref));
