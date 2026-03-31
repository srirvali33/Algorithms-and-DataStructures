/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    // // BFS
    // let count = 0;
    // let queue = [];

    // function bfs(r, c){
    //     if(grid[r][c] != '1')
    //         return;
    //     grid[r][c] = '2'
    //     if(r - 1 >= 0 && grid[r - 1][c] == '1')
    //     queue.push([r - 1, c])
    //     if(c - 1 >= 0 && grid[r][c - 1] == '1')
    //     queue.push([r, c - 1])
    //     if(r + 1 < grid.length && grid[r + 1][c] == '1')
    //     queue.push([r + 1, c])
    //     if(c + 1 < grid[0].length && grid[r][c + 1] == '1')
    //     queue.push([r, c + 1])
    // }

    // for (let i = 0; i < grid.length; i++) {
    //     for (j = 0; j < grid[0].length; j++) {
    //         // pick one with 1 or land and explore top  left bottom right and see for land/water if land mark as node 2 to avoid revisit and count one for each new 1
    //         if (grid[i][j] == 1) {
    //             queue = [[i, j]];
    //             count = count + 1;
    //             while (queue.length>0) {
    //                 let landMap = queue.shift();
    //                 bfs(landMap[0], landMap[1]);
    //             }
    //         }

    //     }
    // };

    // return count;


    //DFS

        let count=0;

        if (grid.length === 0 || grid === null) return 0;


        function findIsland(row, col) {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] == "0" || grid[row][col] == "2") {
            return;
        }
        grid[row][col] = "2"
        findIsland(row - 1, col);
        findIsland(row + 1, col)
        findIsland(row, col + 1);
        findIsland(row, col - 1)
    }

        for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if(grid[i][j]==1){
                count++;
                findIsland(i,j,grid);
            }
        }
    };

    return count;


};