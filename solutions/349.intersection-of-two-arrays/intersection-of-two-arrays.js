/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
   var hashTable = {},result=[]
   nums1.forEach(item=>{
       hashTable[item] = true
   })
   nums2.forEach(item=>{
       if(hashTable[item]){
           result.push(item)
           hashTable[item] = false
       }
   })
   return result
};