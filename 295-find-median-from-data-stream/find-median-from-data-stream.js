
var MedianFinder = function() {
    this. values=[];
};

/** 
 * @param {number} num
 * @return {void}
 */
var MedianFinder = function() {
    this.maxHeap = new Heap((a, b) => a > b);
    this.minHeap = new Heap((a, b) => a < b);
   
    
};



/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.maxHeap.push(num);
    this.minHeap.push(this.maxHeap.pop());
    if (this.minHeap.size() > this.maxHeap.size()) {
        this.maxHeap.push(this.minHeap.pop());
    }

};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.maxHeap.size() > this.minHeap.size()) {
        return this.maxHeap.top();
    }
    return (this.maxHeap.top() + this.minHeap.top())/ 2;

    
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */