/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var mapP={},mapN={}
    for(var i=0;i<nums.length;i++){
        var index = nums[i]
        if(index>=0){
            if(mapP[index]){
                return true
            }else{
                mapP[index] = true
            }
        }else{
            if(mapN[-index]){
                return true
            }else{
                mapN[-index] = true
            }
        }
    }
    return false
};