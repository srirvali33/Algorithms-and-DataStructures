/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    // TC - O(n)
    // SC - O(k)

    if(s.length%2!=0) return false;

    let stk=[];

    const parnMap={
        '(': ')',
        '[': ']',
        '{': '}'
    };

    let countMap={
        '(': 0,
        '[': 0,
        '{': 0
    };

    for(let i of s){
        let currVal;
        if(parnMap.hasOwnProperty(i)){
            stk.push(i);
            countMap[i]=countMap[i]+1;
        }else{
            currVal= stk.pop();
            countMap[currVal]=countMap[currVal]-1;
            if(parnMap[currVal]!==i) return false;
        }
        
    }

    const countVals= Object.values(countMap);

    return (countVals.filter((i)=> (i > 0)).length==0);


};