/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSofar=nums[0],maxEndingHere=nums[0];
    for(let i=1;i<nums.length;i++){
        maxEndingHere=Math.max(maxEndingHere+nums[i],nums[i]);
        maxSofar=Math.max(maxSofar,maxEndingHere);
    }
    return maxSofar;
};