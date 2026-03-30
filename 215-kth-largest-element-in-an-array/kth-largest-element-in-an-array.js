/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

//    let minHeap = new MaxPriorityQueue(k);
// 	for (let num of nums) {
// 		if (minHeap.size() < k) {
// 			minHeap.enqueue(num);
// 		} else {
// 			if (minHeap.front().element > num) {
// 				minHeap.dequeue();
// 				minHeap.enqueue(num);
// 			}
// 		}
// 	}
// 	return minHeap.dequeue().element;

    // add nos top hashmap and iterate from max num towards min num by reducing by '1'
    //any val is found when count and k becomes equal return num
    
    const map = new Map()
    let count=0
    for(const num of nums)
    {
        map.set(num,(map.get(num)|| 0)+1)
    }
    const minNum = Math.min(...nums)
    const maxNum = Math.max(...nums)
    for(let num = maxNum;num >= minNum;num--)
    {
        if(map.get(num))
        {
            count+= map.get(num)
            if(count >=k) return num
        }
    }
    return -1

};