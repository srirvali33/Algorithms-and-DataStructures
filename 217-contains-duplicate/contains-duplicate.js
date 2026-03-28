/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    let dupSet= new Set();

    for(let i of nums){

        if(dupSet.has(i)){
            return true;
        }else{
            dupSet.add(i);
        }
    }

    return false;


    
};