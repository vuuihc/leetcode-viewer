/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 0,right = num;
    while(left < right){
        let middle = left + ((right-left)>>1);
        let square = middle * middle;
        if(square === num){
            return true;
        }else if(square > num){
            right = middle -1;
        }else {
            left = middle +1;
        }
    }
    if(left * left === num){
        return true;
    }
    return false;
};