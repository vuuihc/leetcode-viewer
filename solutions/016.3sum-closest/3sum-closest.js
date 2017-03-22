/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if(nums.length<=3){
        return nums.reduce((ac,value,index)=>{return ac+value},0);
    }
    let min = Infinity,
        sum,
        left,
        right,
        curSum,
        curMin;
    nums.sort((a,b)=>a-b);
    for(let i=0;i<nums.length-2;i++){
        sum = target-nums[i];
        left=i+1,right=nums.length-1;
        curMin = Infinity;
        // console.log(i,left,right);
        while(left<right){
            curSum = nums[left]+nums[right];
            // console.log(nums[i],nums[left],nums[right],curSum+nums[i]);
            if(curSum>sum){
                right--;
            }else{
                left++;
            }
            if(Math.abs(curSum-sum)<Math.abs(curMin)){
                curMin=curSum-sum;
            }
        }
        // console.log(curMin);
        if(Math.abs(curMin)<Math.abs(min)){
            min=curMin;
        }
    }
    return min+target;
};