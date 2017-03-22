/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var head = nums.splice(nums.length-k,k)
    nums.splice(0,0,...head)
};