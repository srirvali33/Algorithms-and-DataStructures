/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    // // Using set approach 


    // let resList=[];
    // nums.sort((a,b)=> (a-b));

    // // search the remaining pieces for the inp ind
    // function twoSum(i){
    // // add the required target in the set and iterate through 2 pointer to get the req val
    // let seen = new Set();
    // for (let j = i + 1; j < nums.length; j++) {
    //   const target = 0 - nums[i] - nums[j];
    //   if (seen.has(target)) {
    //     resList.push([nums[i], nums[j], target]);
    //     // if next val is same as prev skip the iteration
    //     while (nums[j] === nums[j+1]) j++;
    //   }
    //   seen.add(nums[j]);
    // }
    // }
    

    // for(let i=0; i < nums.length; i++){
    //     if(nums[i] > 0) break;
    //     // same inp continue to next and search rest of array
    //     if(i===0 || nums[i-1]!= nums[i]){
    //         twoSum(i);
    //     }
    // }
    // return resList;

    // Using 3 pointer approach have init left and right and traverse and check target 
    // for each iterarion increase or decrease left and right pointers based on target  calculated

    let res=[];
    nums= nums.sort((a,b)=>(a-b));
    for(let i=0; i < nums.length-1; i++){

        if( i > 0 && nums[i-1]== nums[i]) continue;

        let left=i+1; let right=nums.length-1;

        while(left < right){
            let target = nums[i]+nums[left]+nums[right];
            if(target===0){
                res.push([nums[i],nums[left],nums[right]]);
                while( left < right && nums[left]== nums[left+1]){ left=left+1};
                while(left < right && nums[right]== nums[right-1]){right=right-1};
                left=left+1;
                right=right-1;
            }else if(target < 0){
                left++;
            }else{
                right--;
            }
        }

    }

    return res;
    
};