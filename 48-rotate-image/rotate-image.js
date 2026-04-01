/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

     let n = matrix.length
	
	//transpose the matrix
    for (let i = 0 ;i<n;i++ ){
        for(let j=i;j<n;j++){                                       	
            let temp=matrix[i][j]
            matrix[i][j]=matrix[j][i]                        // es6 destructure (alternate way to swap)
			matrix[j][i]=temp								// [arr[i][j], arr[j][i]]=[arr[j][i], arr[i][j]]
        }
    }
    
    

    return matrix.forEach((i)=>i.reverse());
    
};