/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

      let map = {}
    let comp = null
    for(let i = 0; i <= nums.length-1; i++) {
        comp = target - nums[i]
        if(map.hasOwnProperty(comp)) {
            return [map[comp],i]
        }
        map[nums[i]] = i
    }
    
};