/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

    let lftPtr = 0;
    let rgtPtr = height.length-1;
    let maxsum = 0;
    let currsum = 0;

    while (lftPtr < rgtPtr) {

        currsum = Math.min(height[lftPtr], height[rgtPtr]) * (rgtPtr - lftPtr);

        if (maxsum <= currsum) {
            maxsum = currsum;
        }

        if(height[lftPtr]< height[rgtPtr] ){
            lftPtr=lftPtr+1;
        }else{
            rgtPtr=rgtPtr-1;
        }

        
    }

    return maxsum;

};