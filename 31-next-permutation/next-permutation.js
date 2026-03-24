/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {

    function swap(x, y) {
        [nums[x], nums[y]] = [nums[y], nums[x]];

    }

    function reverse(idx) {
        let start = idx, end = nums.length - 1;
        while (start < end) {
            swap(start, end);
            start++;
            end--;
        }
    }


    // From the last find the next possible highest number ans return index

    function nextLargeIndex(ind) {
        for (let i = nums.length - 1; i > ind; i--)
            if (nums[i] > nums[ind]) {
                return i;
            }

    }



for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
        let nextLrgInd = nextLargeIndex(i);
        // swap the least with next possible highest
        swap(i, nextLrgInd)
        // reverse or arrane the array with ascending
        reverse(i + 1);
        return;
    }
}

// no possible number then reverse the array to get next perm
return nums.reverse();

};