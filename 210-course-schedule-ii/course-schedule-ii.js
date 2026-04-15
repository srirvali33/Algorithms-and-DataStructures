/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    const adjlist = new Map();
    const visited = new Array(numCourses).fill(0);
    const order = [];

    let hasCycle = false;
    for (const [w, v] of prerequisites) {
        if (!adjlist.has(v)) {
            adjlist.set(v, []);
        }
        adjlist.get(v).push(w);
    }

    const dfs = function (v) {
        visited[v] = 1;

        if (adjlist.has(v)) {
            for (const w of adjlist.get(v)) {
                if (visited[w] === 0) {
                    dfs(w);
                    if (hasCycle) return;
                } else if (visited[w] === 1) {
                    hasCycle = true;
                    return;
                }
            }
        }

        visited[v] = 2;
        order.push(v);
    };

    for (let i = 0; i < numCourses && !hasCycle; i++) {
        if (visited[i] === 0) {
            dfs(i);
        }
    }

    return hasCycle ? [] : order.reverse();
};