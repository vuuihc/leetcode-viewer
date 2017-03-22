/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var max =[]
    for(var i=0;i<prices.length;i++){
        max[i] = 0
        for(var j=0;j<i;j++){
            if(prices[i]-prices[j]>max[i])
                max[i]=prices[i]-prices[j]
        }
    }
    var result = 0
    for(i=0;i<max.length;i++){
        if(result<max[i])
          result = max[i]
    }
    return result
};