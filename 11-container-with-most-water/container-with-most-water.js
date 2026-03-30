/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let left=0;
    let right= height.length-1;
    let maxWater=0;
    let currWater=0;

    while(left < right){

        // the storage is one having min height to restore * distance b/w right and left
        currWater=Math.min(height[left],height[right])*(right-left);

        if(currWater > maxWater){
            maxWater=currWater;
        }

        // this to move towards max height line
        if(height[left]< height[right]){
            left++;
        }else{
            right--;
        }
    }
    
    return maxWater;
    
};