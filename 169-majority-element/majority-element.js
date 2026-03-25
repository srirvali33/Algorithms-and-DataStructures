/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    let mjObj={};
    let majElem=[-1,-1];

    for(i of nums){
        if(mjObj.hasOwnProperty(i)){
           mjObj[i]= mjObj[i]+1;

        }else{
            mjObj[i]=1;
        }

        if(majElem[1] < mjObj[i]){
            majElem[0]=i;
            majElem[1]=mjObj[i];
        }
    };

    return majElem[0];


    
};