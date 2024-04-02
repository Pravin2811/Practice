//28. Find the Index of the First Occurrence in a String
//https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
//Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
//Example 1:
//Input: haystack = "sadbutsad", needle = "sad"
//Output: 0
let haystack: string = "sadbutsad";
let needle: string = "sad";
function strStr(haystack: string, needle: string): number {
    return haystack.indexOf(needle);
};

console.log(strStr(haystack, needle));