//2974. Minimum Number Game
//https://leetcode.com/problems/minimum-number-game/description/
// You are given a 0-indexed integer array nums of even length and there is also an empty array arr. Alice and Bob decided to play a game where in every round Alice and Bob will do one move. The rules of the game are as follows:
// Every round, first Alice will remove the minimum element from nums, and then Bob does the same.
// Now, first Bob will append the removed element in the array arr, and then Alice does the same.
// The game continues until nums becomes empty.
// Return the resulting array arr.
// Example 1:
// Input: nums = [5,4,2,3]
// Output: [3,2,5,4]
let numss: number[] = [17, 2, 4, 11, 14, 18];
let arrr: number[] = [];
function numberGame(nums: number[]) {
    let length: number = nums.length;
    sort(nums, length);
    for (let i = 0; i < length; i = i + 2) {
        arrr[i] = nums[i + 1];
        arrr[i + 1] = nums[i];
    }
    return arrr;
};


function sort(nums: number[], n: number) {
    let swapped: boolean;
    for (let i = 0; i < n - 1; i++) {
        let isSwapped = false;
        let temp;
        for (let j = 0; j < n - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
}
//sort(numss,4);
numberGame(numss);
console.log(arrr);