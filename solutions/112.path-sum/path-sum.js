/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    let flag =false;
    let preOrder=(root,parent)=>{
        if(root===null){
            return;
        }
        if(root.left===null && root.right===null){
            if(root.val+parent===sum) flag=true;
            return;
        }
        preOrder(root.left,parent+root.val);
        preOrder(root.right,parent+root.val);
    }
    preOrder(root,0);
    return flag;
};