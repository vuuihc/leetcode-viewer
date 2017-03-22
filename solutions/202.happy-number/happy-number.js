/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let h = {},sum;
    while(n!==1 && !h[n]){
        h[n] = true;
        sum = 0;
        while(n>0){
            sum += (n%10)*(n%10);
            n = Math.floor(n/10);
        }
        n = sum;
        console.log(n);
    }
    if(n===1){
        return true;
    }else{
        return false;
    }
};