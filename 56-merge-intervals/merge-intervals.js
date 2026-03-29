/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    if(intervals.length==1) return intervals;

   let result = [];
   const sort = intervals.sort((a,b)=>a[0]-b[0]);
   let prev = sort[0]
   for(let i=1 ;i<sort.length;i++){
        let current = sort[i]
        //update with longest ending period or duration if there is overlap or else push to array the time period
        if(current[0] <= prev[1]){
            prev[1] = Math.max(prev[1],current[1])
        }else{
            result.push(prev)
            prev = current
        }
   }
   result.push(prev)
   return result
    
};