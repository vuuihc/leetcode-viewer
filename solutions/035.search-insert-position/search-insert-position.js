/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const length = nums.length;
    let left=0,right=length;
    while(left<right){
        let middle = left + ((right-left)>>1);
        if(nums[middle]===target){
            return middle;
        }else if(nums[middle]>target){
            right = middle - 1;
        }else{
            left = middle + 1;
        }
    }
    if(nums[left]<target){
        return left + 1;
    }else{
        return left;
    }
    
};