/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    // let angMap= {};

    // for(let i of strs){
    //     let key= i.split("").sort((a,b)=> a.localeCompare(b)).join("");
    //     if(!angMap.hasOwnProperty(key)){
    //         angMap[key]=i;
    //     }else{
    //         let res=angMap[key];
    //         angMap[key]=angMap[key]+"&"+i;
    //     }
    // }

    // return Object.values(angMap).map((i)=> i.split("&"));

    const map = new Map();

    for (let str of strs) {
        const key = str.split('').sort().join('');
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    return Array.from(map.values());
    
};