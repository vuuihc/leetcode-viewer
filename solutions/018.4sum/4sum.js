/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let threeSum = (nums,low,high,target,result,cur)=>{
        if(low+2>high) return;
        if(nums[low]*3>target || nums[high]*3<target) return;
        for(let i=low;i<high;i++){
            if(i>low && nums[i]===nums[i-1]) continue;
            if(nums[i]+nums[high]*2<target) continue;
            if(nums[i]*3>target) break;
            if(nums[i]*3===target && nums[i+2]===nums[i]){
                result.push([cur,nums[i],nums[i],nums[i]]);
                break;
            }
            twoSum(nums,i+1,high,target-nums[i],result,cur,nums[i]);
        }
    }
    let twoSum = (nums,low,high,target,result,cur1,cur2)=>{
        if(low+1>high) return;
        if(nums[low]*2>target || nums[high]*2<target) return;
        while(low<high){
            let curSum=nums[low]+nums[high]
            if(curSum===target){
                result.push([cur1,cur2,nums[low],nums[high]]);
                // console.log(low)
                while(low<high && nums[low+1]===nums[low]) low++;
                while(low<high && nums[high-1]===nums[high]) high--;
                low++;
                high--;
            }else if(curSum>target){
                high--;
            }else{
                low++;
            }
        }
        return;   
    }
    let results = [];
    nums.sort((a,b)=>a-b);
    console.log(nums)
    let max = nums[nums.length-1];
    if(nums[0]*4>target || max*4<target) return results;
    for(let i=0;i<nums.length-3;i++){
        if(i>0 && nums[i]===nums[i-1]) continue;
        if(nums[i]+3*max<target) continue;
        if(4*nums[i]>target) break;
        if(4*nums[i]===target &&　nums[i+3]===nums[i]){
            results.push([nums[i],nums[i],nums[i],nums[i]]);
            break;
        }
        threeSum(nums,i+1,nums.length-1,target-nums[i],results,nums[i]);
    }
    return results;
};