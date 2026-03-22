/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {


    //next valid element in array
    let k=0;
    // iterartor to array
    let curr=0;


    while(curr < nums.length){
        if(nums[curr]!=val){

           nums[k]=nums[curr]

            k=k+1;
        }
        curr=curr+1;
    }

    return k;
    
};