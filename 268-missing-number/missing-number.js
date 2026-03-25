/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    let hset=new Set();

    for (let i=0; i < nums.length; i++){

            hset.add(nums[i]);
        
    }

    for (let i=0; i < nums.length+1; i++){

        if(!hset.has(i)){
            return i;
        } 
        
    }




    
};