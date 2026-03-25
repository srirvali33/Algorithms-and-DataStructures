/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    //TC O(n/2~n)
    //SC O(1)
    let temp = '';
    for (let i = 0; i <= s.length - 1; i++) {
        temp = s[s.length - i - 1];
        if (s.length - i - 1 >= i) {
            s[s.length - i - 1] = s[i];
            s[i] = temp
        }

    }

};