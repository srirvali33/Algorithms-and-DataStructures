/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let  start= 0;
    let end =nums.length-1;

    while(start <= end){

       if(nums[start]==target){
        return start;
       }else if(nums[end]==target){
         return end;
       }else{
        start=start+1;
        end=end-1;
       }


    }

    return -1;
    
};