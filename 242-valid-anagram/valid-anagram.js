/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    // TC - O(n)
    //SC - O(1)

    let objmp1={};

    for(i of s){

        if(!objmp1.hasOwnProperty(i)){
            objmp1[i]=1
        }else{
            objmp1[i]=objmp1[i]+1;
        }
    }

    for(i of t){

        if(!objmp1.hasOwnProperty(i)){
            objmp1[i]=-1
        }else{
            objmp1[i]=objmp1[i]-1;
        }
    }


    return Object.values(objmp1).filter(i => i !=0).length==0;




    
};