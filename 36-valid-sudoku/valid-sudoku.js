/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
const rows = board.length, cols = board[0].length;

    for (let r = 0; r < rows; r++) {
        let seen = new Set();
        for (let c = 0; c < cols; c++) {
            const char = board[r][c];
            if (char === ".") continue;
            if (seen.has(char)) return false;
            seen.add(char);
        }
    }

    for (let c = 0; c < cols; c++) {
        let seen = new Set();
        for (let r = 0; r < rows; r++) {
            const char = board[r][c];
            if (char === ".") continue;
            if (seen.has(char)) return false;
            seen.add(char);
        }
    }

    for (let i = 0; i < 9; i++) {
        let seen = new Set();
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                const row = Math.floor(i / 3) * 3 + r;
                const col = (i % 3) * 3 + c;

                const char = board[row][col];
                if (char === ".") continue;
                if (seen.has(char)) return false;
                seen.add(char);
            }
        }
    }
    return true;

    
};