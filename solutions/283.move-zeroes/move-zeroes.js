/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var l=-1,r=-1
    for(var i=0;i<nums.length;i++){
        if(nums[i]===0){
            if(l===-1){
                l=i
            }
        }else{
            if(l!==-1){
                nums[l++] = nums[i]
                nums[i]=0
            }
        }
    }
};