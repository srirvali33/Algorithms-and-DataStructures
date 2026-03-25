/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const regex = /[^a-zA-Z0-9]/g;
    let str= s.replace(regex,"").trim().toLowerCase();

    const arr = str.split('');

    let strt=0;
    let end= arr.length-1;

    while(strt <= end){

        if(arr[strt]!=arr[end]){

            return false;
        }

        strt++;
        end--;
    }

    return true;

    
};