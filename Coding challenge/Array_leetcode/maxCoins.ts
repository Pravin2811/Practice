//1561. Maximum Number of Coins You Can Get
//https://leetcode.com/problems/maximum-number-of-coins-you-can-get/description/
//There are 3n piles of coins of varying size, you and your friends will take piles of coins as follows:
//In each step, you will choose any 3 piles of coins (not necessarily consecutive).
//Of your choice, Alice will pick the pile with the maximum number of coins.
//You will pick the next pile with the maximum number of coins.
//Your friend Bob will pick the last pile.
//Repeat until there are no more piles of coins.
//Given an array of integers piles where piles[i] is the number of coins in the ith pile.
//Return the maximum number of coins that you can have.
//Example 1:
//Input: piles = [2,4,1,2,7,8]
//Output: 9
let piles: number[] = [9,8,7,6,5,1,2,3,4];
function maxCoins(piles: number[]): number {
    let length: number = piles.length;
    let start: number = length / 3;
    sort(piles, length);
    let maxNoCoins: number = 0;
    for(let i=start; i<length; i=i+2){
        maxNoCoins += piles[i];
    }

    return maxNoCoins;
};

function ascSort(nums: number[], n: number): void{
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
}

console.log(maxCoins(piles));