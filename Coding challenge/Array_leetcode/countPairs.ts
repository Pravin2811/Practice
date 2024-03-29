//2824. Count Pairs Whose Sum is Less than Target
//https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/description/
//Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.
//Example 1:
//Input: nums = [-1,1,2,3,1], target = 2
//Output: 3
let numsArr: number[] = [-1, 1, 2, 3, 1];
let target: number = 2;
function countPairs(nums: number[], target: number): number {
    let count: number = 0;
    const length: number = nums.length;
    for(let i=0; i<length-1; i++){
        for(let j=i+1; j<length; j++){
            if(nums[i] + nums[j] < target){
                count++;
            }
        }
    }

    return count;
};

console.log(countPairs(numsArr, target));