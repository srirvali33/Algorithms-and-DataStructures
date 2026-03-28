
var MinStack = function() {
    this.stkarray=[];
    this.topVal=0;
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {

    if(this.stkarray.length==0){
        this.stkarray.push(val);
        this.minStack.push(val)
        this.topVal=0;
    }else{

        this.stkarray.push(val);
        this.topVal=this.topVal+1;
        if(val<= this.minStack[this.minStack.length-1]){
            this.minStack.push(val);
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stkarray.length==0){
        this.topVal=0;
    }else{
        let deletedVal=this.stkarray.pop();
        this.topVal=this.topVal-1;
        if(deletedVal== this.minStack[this.minStack.length-1]){
            this.minStack.pop();
        }
    }

    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stkarray[this.topVal];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */