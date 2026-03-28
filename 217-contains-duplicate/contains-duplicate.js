/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    let obj={};

    for(let i of nums){
        if(obj.hasOwnProperty(i)){
            return true;
        }else{
            obj[i]=1;
        }
    }

    return false;


    
};