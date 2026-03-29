/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

    // // using input auxilary space
    
    // let rowslen= matrix.length;
    // let colslen= matrix[0].length;

    // let rowList=[];
    // let colList=[];

    // for(let i in matrix){
    //     for(let j in matrix[i]){

    //         if(matrix[i][j]==0){
    //             rowList.push(i);
    //             colList.push(j);

    //         }

    //     }
    // }
    // for (let row of rowList){
    // for(let i=0; i < colslen; i++){
    //         matrix[row][i]=0;
    //     }
    // }

    // for (let i=0; i < rowslen; i++){
    // for(let col of colList){
    //         matrix[i][col]=0;
    //     }
    // }

    let m = matrix.length;
    let n = matrix[0].length;

    let firstRowZero = false;
    let firstColZero = false;

    // Step 1: Check first row for zeros
    for(let j = 0; j < n; j++){
        if(matrix[0][j] === 0){
            firstRowZero = true;
            break;
        }
    }

    // Step 1: Check first column for zeros
    for(let i = 0; i < m; i++){
        if(matrix[i][0] === 0){
            firstColZero = true;
            break;
        }
    }


    // mark the row and cols for any row or col zero from ind 1

    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            if(matrix[i][j] == 0){
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }

    // traverse through markers and update the rows and cols to corresponding zeros
    
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            if(matrix[i][0] === 0 || matrix[0][j] === 0){
                matrix[i][j] = 0;
            }      
        }
    }


    // Step 4: Handle first row
    if(firstRowZero){
        for(let j = 0; j < n; j++){
            matrix[0][j] = 0;
        }
    }

    // Step 4: Handle first column
    if(firstColZero){
        for(let i = 0; i < m; i++){
            matrix[i][0] = 0;
        }
    }
};