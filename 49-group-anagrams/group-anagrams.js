/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let angMap= {};

    for(let i of strs){
        let key= i.split("").sort((a,b)=> a.localeCompare(b)).join("");
        if(!angMap.hasOwnProperty(key)){
            angMap[key]=i;
        }else{
            let res=angMap[key];
            angMap[key]=angMap[key]+"&"+i;
        }
    }

    return Object.values(angMap).map((i)=> i.split("&"));
    
};