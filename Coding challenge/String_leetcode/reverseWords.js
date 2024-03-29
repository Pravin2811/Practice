//557. Reverse Words in a String III
//https://leetcode.com/problems/reverse-words-in-a-string-iii/description/
//Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
//Example 1:
//Input: s = "Let's take LeetCode contest"
//Output: "s'teL ekat edoCteeL tsetnoc"
var strInput = "Let's take LeetCode contest";
function reverseWords(s) {
    var words = s.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].split('').reverse().join('');
    }
    return words.join(' ');
}
;
console.log(reverseWords(strInput));
