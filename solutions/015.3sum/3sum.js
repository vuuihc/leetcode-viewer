/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    Array.prototype.sort.apply(nums,[(a,b)=>a-b]);
    let result = [];
    console.log(nums)
    for(let i = 0;i < nums.length-2;i++){
        let target = -nums[i],low=i+1,high=nums.length-1;
        if(nums[i]===nums[i-1]) continue;
        while(low<high){
            if(nums[low]+nums[high]===target){
                result.push([nums[i],nums[low],nums[high]]);
                while(nums[low]===nums[low+1]) low++;
                while(nums[high]===nums[high-1]) high--;
                low++;high--;
            }else if(nums[low]+nums[high]<target){
                low++;
            }else{
                high--;
            }
        }
    }
    return result;
};