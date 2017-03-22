/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let length = numbers.length,
        maxIndex = length-1;
    for(let i=0;i<length;i++){
        if(target-numbers[i]>numbers[length-1]){
            continue;
        }
        for(let j=maxIndex;j>i;j--){
            let curSum = numbers[i]+numbers[j];
            if(curSum===target){
                return [i+1,j+1];
            }else if(curSum>target){
                maxIndex = j;
            }else{
                break;
            }
        }
    }
};