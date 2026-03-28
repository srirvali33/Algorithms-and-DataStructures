/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {

function convertToBinary(num){
        let count=0;
        while(num > 0){
            if((num%2)!==0){
            
                count=count+1;
                  
            }
            if(num == 1) break;
            num=parseInt(num/2);
        }

        return count

    };

    let res=convertToBinary(n);
    return res;


};