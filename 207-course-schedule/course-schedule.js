/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {

    let preMap={};

    if(prerequisites.length==0) return true;

    const inProgress = new Array(numCourses).fill(0);

    // adj map list
   for (const [a, b] of prerequisites) {
        if (!preMap[b]) preMap[b] = [];
        preMap[b].push(a);
        inProgress[a]++;
    }


    //iterate and find out true or false from bfs for each root node 
    const queue = [];
    inProgress.forEach((num, index) => {
        if (num === 0) queue.push(index);
    })

    let count = 0;
    while (queue.length > 0) {
        const b0 = queue.shift();
        count++;
        if (preMap[b0]) {
            for (const a of preMap[b0]) {
                inProgress[a]--;
                if (inProgress[a] === 0) queue.push(a);
            }
        }
    }

    return count === numCourses;
    
};