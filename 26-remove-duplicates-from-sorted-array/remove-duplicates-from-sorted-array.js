/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let left=1;
    let right=1;
    let len=nums.length;

    while(left < len && right < len ){

        if(nums[right]==nums[right-1]){
            right=right+1;
        }else{
            nums[left]=nums[right];
            left=left+1;
            right=right+1;
        }

    }

    nums.splice(left);

    return left+1;
    
};