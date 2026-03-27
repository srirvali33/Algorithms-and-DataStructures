/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // get the prefix val before ith index
    let prefix = [];
    // get the suffix val after ith index
    let suffix = [];
    // multiple prefix and sufix to get prod eccept ith index res
    let answer = [];
    let prefixval = 1;
    for (let i = 0; i < nums.length; i++) {
        prefix[i] = prefixval;
        prefixval = prefixval * nums[i];
    }
    let suffixval = 1;
    for (let j = nums.length - 1; j >= 0; j--) {

        suffix[j] = suffixval;
        suffixval = suffixval * nums[j];

    }
    for (let k = 0; k < nums.length; k++) {
        answer[k]=prefix[k] * suffix[k];
    }

    return answer;
};