/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var result = Array.from({length:nums.length},(v,k)=>k+1)
    for(var i=0;i<nums.length;i++){
        result[nums[i]-1] = 0
    }
    return result.filter(item=>item!==0)
};