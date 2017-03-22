/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let length = digits.length;
    while(length>0){
        if(digits[length-1]<9){
            digits[length-1]++;
            break;
        }else{
            digits[length-1] = 0;
            length --;
        }
    }
    if(digits[0]>0){
        return digits;
    }else{
        return [1].concat(digits);
    }
};