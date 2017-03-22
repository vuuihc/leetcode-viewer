/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root===null) return null;
    let right = invertTree(root.left),
        left = invertTree(root.right);
    root.left = left;
    root.right = right;
    return root;
};