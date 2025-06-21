/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {



   
    var left = 0;
    var right= nums.length-1;
    var middle=0;
   
    while(left <= right){
        
        middle=Math.floor((right-left/2));

        let midVal=nums[middle]

        if(midVal===target){
            return middle;
        }

        else if(target < midVal){
            right=middle-1;
        }

        else if (target > midVal){
            left=middle+1;
        }

    }

    return -1;
    }
