/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var mapP = []
    var mapN = []
    for(var i=0;i<nums.length;i++){
        var index = nums[i]
        if(index>=0){
            if(mapP[index]!==undefined && i-mapP[index]<=k){
                return true
            }else{
                mapP[index] = i
            }
        }else{
            if(mapN[-index]!==undefined && i-mapN[-index]<=k){
                return true
            }else{
                mapN[-index]=i
            }
        }
    }
    return false
};