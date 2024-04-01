//2574. Left and Right Sum Differences
//https://leetcode.com/problems/left-and-right-sum-differences/description/
//Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:
//answer.length == nums.length.
//answer[i] = |leftSum[i] - rightSum[i]|.
//Where:
//leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
//rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
//Return the array answer.
// Example 1:
// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]
var nums = [1]; //[10,4,8,3];
function leftRightDifference(nums) {
    var output = [];
    var length = nums.length;
    for (var i = 0; i < length; i++) {
        var leftSum = 0;
        var rightSum = 0;
        for (var j = 0; j < i; j++) {
            leftSum += nums[j];
        }
        for (var k = i + 1; k < length; k++) {
            rightSum += nums[k];
        }
        output.push(Math.abs(leftSum - rightSum));
    }
    return output;
}
;
console.log(leftRightDifference(nums));
