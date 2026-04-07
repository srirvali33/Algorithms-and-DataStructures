/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    let res=[];

    if (!digits) {
    return [];
  }

    let map={
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };
    function backtrack(index, path) {
        if (index === digits.length) {
            res.push(path);
            return;
        }

        for (let ch of map[digits[index]]) {
            backtrack(index + 1, path + ch);
        }
    }

    backtrack(0, "");
    return res;

        
};