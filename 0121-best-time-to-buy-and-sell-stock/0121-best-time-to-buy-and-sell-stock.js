/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let maxProfit =0;
    let minIndex = 0;
    for (let i =0; i< prices?.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
            minIndex = i;
        } else{
            maxProfit = prices[i]- min > maxProfit ? prices[i]- min : maxProfit
        }
    }
    
    return maxProfit
};