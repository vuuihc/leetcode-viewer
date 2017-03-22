/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let result=0,max = n;
    for(let i=1;i<=max+1;i++){
        if(n<i){
            result = i-1;
            break;
        }else{
            n = n - i;
        }
    }
    return result;
};