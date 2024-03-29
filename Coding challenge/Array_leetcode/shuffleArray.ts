//1470. Shuffle the Array
//https://leetcode.com/problems/shuffle-the-array/description/
//Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
//Return the array in the form [x1,y1,x2,y2,...,xn,yn]
//Example 1:
//Input: nums = [2,5,1,3,4,7], n = 3
//Output: [2,3,5,4,1,7]
let nums: number[] = [2, 5, 1, 3, 4, 7];
let n: number = 3;
function shuffle(nums: number[], n: number): number[] {
    let result: number[] = [];
    for (let i = 0; i < n; i++) {
        result[2 * i] = nums[i];
        result[2 * i + 1] = nums[n + i];
    }
    return result;
};

console.log(shuffle(nums, n));