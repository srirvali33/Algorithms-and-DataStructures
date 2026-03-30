/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
      let res = '';
      for(let i = 0; i < s.length; i++){
          // Odd - if there is only 1 char in the middle, like 'bob'
          let lOdd = i, rOdd = i;
          expandAroundCenter(lOdd, rOdd)
          //Even - 2 chars in the middle, like 'kbbk' check both
          let lEven = i, rEven = i + 1;
          expandAroundCenter(lEven, rEven);
      }
    // helper
      function expandAroundCenter(left, right){
        while(left >= 0 && right < s.length && s[left] === s[right]){
          let subStr = s.substring(left, right + 1);
          
          if(subStr.length > res.length){
            res = subStr;
             
          }
          //decrease left towards left from middle and verify as much as possible
          left--;
          //increase right towards right from middle and verify as much as possible
          right++;
        }
      }
      return res;
};