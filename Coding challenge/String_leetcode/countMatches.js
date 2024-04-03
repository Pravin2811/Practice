//1773. Count Items Matching a Rule
//https://leetcode.com/problems/count-items-matching-a-rule/description/
//You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.
//The ith item is said to match the rule if one of the following is true:
//ruleKey == "type" and ruleValue == typei.
//ruleKey == "color" and ruleValue == colori.
//ruleKey == "name" and ruleValue == namei.
//Return the number of items that match the given rule.
//Example 1:
//Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
//Output: 1
var items = [["phone", "blue", "pixel"], ["computer", "silver", "phone"], ["phone", "gold", "iphone"]];
var ruleKey = "type", ruleValue = "phone";
function countMatches(items, ruleKey, ruleValue) {
    var count = 0;
    for (var i = 0; i < items.length; i++) {
        if (ruleKey === "type" && ruleValue === items[i][0]) {
            count++;
        }
        else if (ruleKey === "color" && ruleValue === items[i][1]) {
            count++;
        }
        else if (ruleKey === "name" && ruleValue === items[i][2]) {
            count++;
        }
    }
    return count;
}
;
console.log(countMatches(items, ruleKey, ruleValue));
