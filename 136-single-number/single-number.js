/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
//    let obj={};
//    for(i of nums){
//     if(!obj.hasOwnProperty(i)){
//         obj[i]=1
//     }else{
//         obj[i]=obj[i]+1;
//     }
//    }

//   return parseInt(Object.entries(obj).filter((i)=> i[1]==1)[0][0]);


let res=0;

for (let i of nums){

    res=res^i;
}

return res;

};