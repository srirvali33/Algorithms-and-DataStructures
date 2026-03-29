/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let arr = []
    //assing initial indices on all 4 fields
    let left = 0, right = matrix[0].length-1, top = 0, bottom = matrix.length-1
    let len = matrix.length*matrix[0].length
    while(arr.length < len){
        // start from left reach towards right and print and mark top is covered by increasing
        for(let i=left; i<=right && arr.length < len; i++)  arr.push(matrix[top][i])
        top++  
        // start from top reach towards bottom and print mark right is covered by decreasing
        for(let i=top; i<=bottom && arr.length < len; i++) arr.push(matrix[i][right])
        right--
        // start from right reach towards left and print mark bottom is covered by decreasing
        for(let i=right; i>=left && arr.length < len; i--) arr.push(matrix[bottom][i])
        bottom--
        // start from bottom  reach towards top and print mark left is covered by increasing
        for(let i=bottom; i>=top && arr.length < len; i--) arr.push(matrix[i][left])
        left++
    }
    return arr
    
};