//1512. Number of Good Pairs
//https://leetcode.com/problems/number-of-good-pairs/description/
//Given an array of integers nums, return the number of good pairs.
//A pair (i, j) is called good if nums[i] == nums[j] and i < j.
//Example 1:
//Input: nums = [1,2,3,1,1,3]
//Output: 4
var nums1 = [1, 2, 3, 1, 1, 3];
function numIdenticalPairs(nums) {
    var count = 0;
    var length = nums.length;
    for (var i = 0; i < length; i++) {
        for (var j = i + 1; j < length; j++) {
            if (nums[i] == nums[j]) {
                count++;
            }
        }
    }
    return count;
}
;
console.log(numIdenticalPairs(nums1));
