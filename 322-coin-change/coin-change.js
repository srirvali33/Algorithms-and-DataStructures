/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

    // greedy appraoch misses few scenarios of taking optimized vals using dp instead
    // coins=coins.sort((a,b)=> (b-a));

    // let left=0;
    // let count=0;

    // if(amount==0) return 0;
 
    // while(amount > 0 && left < coins.length){
    //         if( coins[left] <= amount){
    //             amount=amount-coins[left];
    //             count=count+1;
    //         }else{
    //             left=left+1;
    //         }
    //     }


    // return amount==0 ? count: -1;


    let dp=new Array(amount+1).fill(Infinity);

    dp[0]= 0;

   for (let coin of coins) { // Check each coin
    for (let i = coin; i <= amount; i++) { // Iterate through the entire amount from coin
      dp[i] = Math.min(dp[i], dp[i - coin] + 1); // Update minimum number of needed coins.
    }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]; 
    // If the last element is Infinity, then -1
};