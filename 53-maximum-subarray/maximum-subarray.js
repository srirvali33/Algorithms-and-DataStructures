/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

     if(nums.length==1){
        
        return nums[0];
    }
    let currsum = nums[0];
    let maxsum = nums[0];


        for (let x = 1; x < nums.length; x++) {
            //kadanes algorithm if sum at any index is 0 reset t0 zero and start fresh
            currsum= nums[x]+ (currsum <0? 0: currsum );

            maxsum = Math.max(currsum, maxsum);
        }

        return maxsum;

    };