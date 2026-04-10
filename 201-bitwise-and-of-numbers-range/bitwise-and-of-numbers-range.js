/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {

    let res=0;

        while (right > left) {
            right = right & (right - 1);
        }
        return right;

        
};