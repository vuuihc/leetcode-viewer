/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length===0) return 0;
    let dp = [],max = 0;
    dp[0] = nums[0];
    if(nums.length===1) return nums[0];
    dp[1] = Math.max(nums[1],dp[0]);
    max = dp[1];
    for(let i=2;i<nums.length;i++){
        dp[i] = Math.max(nums[i]+dp[i-2],dp[i-1]);
        if(max<dp[i]) max=dp[i];
    }
    return max;
};