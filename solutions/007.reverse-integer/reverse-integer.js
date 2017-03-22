/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x<-Math.pow(2,31) || x>Math.pow(2,31)-1) return 0;
    let n = Math.abs(x),
        result=0;
    while(n){
        result = result*10+n%10;
        n=Math.floor(n/10);
    }
    if(x<0){
        if(result>Math.pow(2,31)) return 0;
        result = -result;
    }
    if(result>Math.pow(2,31)-1) return 0;
    return result;
};