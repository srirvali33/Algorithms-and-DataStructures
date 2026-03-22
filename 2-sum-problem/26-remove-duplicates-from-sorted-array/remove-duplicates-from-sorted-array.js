/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
     let currIndex=0;
     let nextIndex=1;

     while(nextIndex < nums.length){

        if(nums[currIndex]== nums[nextIndex]){
            nextIndex=nextIndex+1;
        }else{
            currIndex=currIndex+1;
            nums[currIndex]=nums[nextIndex];
            nextIndex=nextIndex+1;
        }

     }

     return currIndex+1;

    
};