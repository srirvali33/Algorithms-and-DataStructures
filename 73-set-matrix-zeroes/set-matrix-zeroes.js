/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

    let rowslen= matrix.length;
    let colslen= matrix[0].length;

    let rowList=[];
    let colList=[];

    for(let i in matrix){
        for(let j in matrix[i]){

            if(matrix[i][j]==0){
                rowList.push(i);
                colList.push(j);

            }

        }
    }
    for (let row of rowList){
    for(let i=0; i < colslen; i++){
            matrix[row][i]=0;
        }
    }

    for (let i=0; i < rowslen; i++){
    for(let col of colList){
            matrix[i][col]=0;
        }
    }    
};