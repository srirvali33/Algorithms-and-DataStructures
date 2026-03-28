/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //TC O(n)
    //SC O(n)

    let houses=[nums[0],Math.max(nums[0],nums[1])];

    for(let i=2; i <nums.length; i++){
        houses[i]= Math.max(houses[i-1], nums[i]+houses[i-2]);
    }

    return houses[nums.length-1];
    
};