/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var max=[];
    var placeNum = function(num){
        if(max.indexOf(num)===-1){
            max.push(num)
            max.sort(function(a,b){
                if(a>b)
                  return -1
                else
                  return 1
            })
            if(max.length>3)
                max = max.slice(0,3)
        }
    }
    for(var i=0;i<nums.length;i++){
        placeNum(nums[i])
    }
    if(max[2]!==undefined){
        return max[2]
    }else{
        return max[0]
    }
};