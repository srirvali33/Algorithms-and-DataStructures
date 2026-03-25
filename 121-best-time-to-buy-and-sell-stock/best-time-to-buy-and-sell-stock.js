/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let minPrice=prices[0];
    let maxProfit=0;

    for(let i=1; i < prices.length; i++){
        if(maxProfit <= prices[i]-minPrice){
            maxProfit=prices[i]-minPrice;
        }

        if(minPrice > prices[i] ){
            minPrice=prices[i];
        }
    }

    return maxProfit;


    
};