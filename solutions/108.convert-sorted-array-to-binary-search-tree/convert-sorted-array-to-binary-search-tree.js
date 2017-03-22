/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    let Insert = (nums,left,right)=>{
        if(left>right) return null;
        let middle = left+((right-left)>>1);
        let root = new TreeNode(nums[middle]);
        root.left=Insert(nums,left,middle-1);
        root.right=Insert(nums,middle+1,right);
        return root;
    }
    if(nums.length===0) return null;
    let root = Insert(nums,0,nums.length-1);
    return root;
};