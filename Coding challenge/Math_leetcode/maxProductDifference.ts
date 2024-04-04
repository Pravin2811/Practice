//1913. Maximum Product Difference Between Two Pairs
//https://leetcode.com/problems/maximum-product-difference-between-two-pairs/description/
//The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).
//For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
//Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.
//Return the maximum such product difference.
// Example 1:
// Input: nums = [5,6,2,7,4]
// Output: 34
let nums: number[] = [5, 6, 2, 7, 4];
function maxProductDifference(nums: number[]): number {
    let length: number = nums.length;
    sort(nums, length);
    let product1: number = nums[0] * nums[1];
    let product2: number = nums[length-1] * nums[length-2];
    let result: number = product2 - product1;
    return result;
};

function sort(nums: number[], n: number): void{
    let swapped: boolean;
    for(let i=0; i<n-1; i++){
        let isSwapped: boolean = false;
        let temp;
        for(let j=0; j<n-i-1; j++){
            if(nums[j] > nums[j+1]){
                temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
                isSwapped = true;
            }
        }

        if(!isSwapped){
            break;
        }
    }
};

console.log(maxProductDifference(nums));