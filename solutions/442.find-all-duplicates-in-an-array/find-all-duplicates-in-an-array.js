/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var result = []
    for(var i=0;i<nums.length;i++){
        if(result[nums[i]-1]===undefined){
            result[nums[i]-1] = -1
        }else{
            result[nums[i]-1] = nums[i]
        }
    }
    return result.filter((item,index)=>item==index+1)
};