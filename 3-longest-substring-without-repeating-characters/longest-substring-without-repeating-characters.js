/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    // let maxlen=0, left=0 , charwindow= new Set();

    // for(let i=0; i < s.length; i++){
    //     // remove duplicates from window dynamically until it has unique vals from begining
    //     while(charwindow.has(s[i])){
    //         charwindow.delete(s[left]);
    //         left++;
    //     }

    //     charwindow.add(s[i]);
    //     maxlen= Math.max(maxlen, charwindow.size);
    // };

    // return maxlen;

    //optimized by DP

    let lastSeen = {}; // char -> last index
    let left = 0;
    let maxlen = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (lastSeen[char] !== undefined && lastSeen[char] >= left) {
            left = lastSeen[char] + 1;
        }
        maxlen = Math.max(maxlen, i - left + 1);
        lastSeen[char] = i;
    }
    return maxlen;
    
};