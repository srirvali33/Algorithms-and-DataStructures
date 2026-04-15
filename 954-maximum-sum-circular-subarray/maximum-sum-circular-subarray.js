/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
   let n = nums.length, total = nums[0];
    let maxSum = nums[0], currMax = nums[0];
    let minSum = nums[0], currMin = nums[0];

    for (let i = 1; i < n; i++) {
        total += nums[i];

        currMax = Math.max(currMax + nums[i], nums[i]);
        maxSum = Math.max(maxSum, currMax);

        currMin = Math.min(currMin + nums[i], nums[i]);
        minSum = Math.min(minSum, currMin);
    }

    if (maxSum < 0) return maxSum;
    return Math.max(total - minSum, maxSum);

    
};