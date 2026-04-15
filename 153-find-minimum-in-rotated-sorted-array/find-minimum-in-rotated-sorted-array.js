/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
        
    const len = nums.length;
    if (len === 1 || nums[0] < nums[len - 1]) return nums[0];

    let l = 0;
    let r = len - 1;
    while (l <= r) {
        const mid = Math.floor((r + l) / 2);
        if (nums[mid - 1] >= nums[mid]) {
            return nums[mid];
        }

        if (nums[mid] < nums[r]) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return -1;

    
};