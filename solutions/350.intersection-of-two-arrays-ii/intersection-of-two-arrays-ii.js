/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var hashTable = {},result=[]
    nums1.forEach(item=>{
        if(hashTable[item]){
            hashTable[item] ++
        }else{
            hashTable[item] = 1
        }
    })
    nums2.forEach(item=>{
        if(hashTable[item]){
            result.push(item)
            hashTable[item] --
        }
    })
    return result
};