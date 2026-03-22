/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    // TC - O(n)
    //SC - O(n)

    // let sum = nums[0];
    // let previndex = 0;

    // for (let i = 1; i <= nums.length-1; i++) {

    //     sum = sum + nums[i];
    //     if (sum == target) {
    //         return [previndex, i];
    //     }

    //     else() {
    //         sum = sum - nums[previndex];
    //     }

    //     previndex = i;

    // }

    let mp={};

    for (let i=0; i < nums.length; i++){

        if( mp.hasOwnProperty(target-nums[i])){

            return [mp[target-nums[i]], i]
        }
        else{
            mp[nums[i]]= i;
        }
    }


};