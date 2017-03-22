/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let helper = (root)=>{
        if(root===null){
            return {isBalanced:true,height:0};
        }
        let r1 = helper(root.left);
        let r2 = helper(root.right);
        let isBalanced= r1.isBalanced && r2.isBalanced && Math.abs(r1.height-r2.height)<=1,
            height=1+Math.max(r1.height,r2.height);
        return {isBalanced,height}
    }
    return helper(root).isBalanced;
};