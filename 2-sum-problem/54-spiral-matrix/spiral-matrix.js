/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    const result = [];
    if (!matrix || matrix.length === 0) {
        return result;
    }

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = A=matrix[0].length - 1;
   
    while (top <= bottom && left <= right) {
        // Traverse Left to Right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // Traverse Top to Bottom
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // Traverse Right to Left
        if (top <= bottom) { // Check if there's still a bottom row
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // Traverse Bottom to Top
        if (left <= right) { // Check if there's still a left column
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
    
    
};