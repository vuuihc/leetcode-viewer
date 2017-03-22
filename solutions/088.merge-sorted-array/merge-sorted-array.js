/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // nums1.splice(m,nums1.length);
    // nums2.splice(n,nums2.length);
    // nums1.push(...nums2);
    // nums1.sort((a,b)=>a-b);
    while(n>0){
        nums1[m+n-1] = (m===0||nums2[n-1]>nums1[m-1])?nums2[--n] : nums1[--m]
    }
    
};