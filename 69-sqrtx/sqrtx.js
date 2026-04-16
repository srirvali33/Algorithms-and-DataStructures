/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

    let val = 0;
    while((val * val) <= x) val++;
    return val - 1;


};