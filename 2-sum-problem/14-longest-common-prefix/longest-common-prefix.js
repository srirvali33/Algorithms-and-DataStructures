/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let sortedList = strs.sort((a,b)=>(a.length-b.length));

    let curr= sortedList[0];
    let res="";

    for (let i=0; i < sortedList[0].length; i++){

        let errorflag=false;

        for (let j=1; j < sortedList.length; j++){

            if(curr[i]!=sortedList[j][i]){
               errorflag=true
            }


        }

        if(!errorflag){
            res=res+curr[i];
        }else{
            break;
        }

    }

    return res;



    
};