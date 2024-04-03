//1859. Sorting the Sentence
//https://leetcode.com/problems/sorting-the-sentence/description/
//A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.
//A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.
//For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
//Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.
//Example 1:
//Input: s = "is2 sentence4 This1 a3"
//Output: "This is a sentence"
var strInput = "is2 sentence4 This1 a3";
function sortSentence(s) {
    var inp = s.split(" ");
    var arr = [];
    for (var _i = 0, inp_1 = inp; _i < inp_1.length; _i++) {
        var i = inp_1[_i];
        var length_1 = i.length;
        var val = (Number)(i.substring(length_1 - 1, length_1));
        arr[val] = i.substring(0, length_1 - 1);
    }
    return arr.join(" ").trim();
}
;
console.log(sortSentence(strInput));
