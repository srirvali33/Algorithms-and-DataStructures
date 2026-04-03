/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {


    // TC O(m × n × 4^L)
    // SC O(m × n)


let m = board.length;
    let n = board[0].length;
    let visited = Array.from({ length: m }, () => Array(n).fill(false));

    const backtrack = (r, c, idx) => {
        if (idx === word.length) return true;

        if (
            r < 0 || r >= m ||
            c < 0 || c >= n ||
            visited[r][c] ||
            board[r][c] !== word[idx]
        ) {
            return false;
        }

        visited[r][c] = true;

        const found =
            backtrack(r + 1, c, idx + 1) ||
            backtrack(r - 1, c, idx + 1) ||
            backtrack(r, c + 1, idx + 1) ||
            backtrack(r, c - 1, idx + 1);

        visited[r][c] = false;
        return found;
    };

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (board[r][c] === word[0] && backtrack(r, c, 0)) {
                return true;
            }
        }
    }
    return false;

};