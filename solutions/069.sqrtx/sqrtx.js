/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0,right = x;
    while(left < right){
        let middle = left + ((right - left)>>1);
        let square = middle * middle;
        if(square === x){
            return middle;
        }else if(square > x){
            right = middle - 1;
        }else {
            left = middle + 1;
        }
    }
    if(left * left > x){
        return left - 1;
    }
    return left;
};