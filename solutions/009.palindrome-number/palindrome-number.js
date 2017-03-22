/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let a=Math.abs(x),b=0;
    while(a){
        b = b*10 + a%10;
        a = Math.floor(a/10);
    }
    return b===x;
};