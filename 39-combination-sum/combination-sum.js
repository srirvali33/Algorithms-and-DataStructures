/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

    const Ans = [];
    candidates.sort((a, b) => a - b);


    // Helper function
    const backTrack = (path, startIdx, target) => {
        // base case
        if (target === 0) {
            Ans.push(path.slice()); // add a copy of op to Ans
            return;
        }

        if(target <0){
            return;
        }

       for (let i = startIdx; i < candidates.length; i++) {
        path.push(candidates[i]);
        backTrack(path, i, target - candidates[i]);
         path.pop();
    }
        
    }

    backTrack([], 0, target);
    return Ans;
    
};