/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {

    // let rowlen=board.length-1;
    // let collen= board[0].length-1;
    // let newstate = new Array(rowlen).fill(new Array(collen));

    // function nextState(i, j) {

    //     let count = 0;
       
    //     if (i-1>=0 && board[i - 1][j] == 1) {
    //         count = count + 1;
    //     }
    //     if (i+1 < rowlen  && board[i + 1][j] == 1) {
    //         count = count + 1;
    //     }
    //     if (j-1>=0 && board[i][j - 1] == 1) {
    //         count = count + 1;
    //     }
    //     if (j+1 < collen &&  board[i][j + 1] == 1) {
    //         count = count + 1;
    //     }
    //     if (i-1>=0 && j-1>=0 && board[i - 1][j - 1] == 1) {
    //         count = count + 1;
    //     }
    //     if (i-1>=0 && j+1 < collen && board[i - 1][j + 1] == 1) {
    //         count = count + 1;
    //     }
    //     if (i+1 < rowlen  &&  j-1>=0  && board[i + 1][j - 1] == 1) {
    //         count = count + 1;
    //     }
    //     if (i+1 < rowlen  &&  j+1 < collen && board[i + 1][j + 1] == 1) {
    //         count = count + 1;
    //     }


    //     if (board[i][j] == 1) {
    //         if (count < 2) {
    //             newstate[i][j] = 0

    //         }else if(count > 3){
    //             newstate[i][j] = 0
    //         }else {
    //             newstate[i][j] = 1
    //         }

    //     } else {
    //         if(count==3){
    //             newstate[i][j] = 1
    //         }

    //     }

    // };

    // for (let i = 0; i < board.length; i++) {
    //     for (let j = 0; j < board[0].length; j++) {
    //         nextState(i, j);
    //     }
    // }

    // for (let i = 0; i < board.length; i++) {
    //     for (let j = 0; j < board[0].length; j++) {
    //         board[i][j]=newstate[i][j];
    //     }
    // }


      const h = board.length;
    const w = board[0].length;

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            let aliveNeighbors = 0;
            
            // Starts top left and goes clockwise
            const neighbors = [[i - 1, j - 1], [i - 1, j], [i - 1, j + 1],
            [i, j + 1], [i + 1, j + 1], [i + 1, j],
            [i + 1, j - 1], [i, j - 1]];

            for ([r, c] of neighbors) {
                if (r < 0 || c < 0 || r >= h || c >= w) continue;
                // Cells that are revived will not count as they started at 0
                if (board[r][c] % 2 === 1) aliveNeighbors++;
            }

            // If cell's state changes add 2 to it
            if (board[i][j]) {
                if (aliveNeighbors < 2 || aliveNeighbors > 3) board[i][j] += 2;
            }
            else {
                if (aliveNeighbors === 3) board[i][j] += 2
            }
        }
    }

    
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            const cell = board[i][j];

            if (cell === 3) board[i][j] = 0;
            else if (cell === 2) board[i][j] = 1;

        }
    }





};