/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let maxDepth={val:0};
    let preOrder=(node,depth)=>{
        if(node===null) return;
        if(depth>maxDepth.val){
            maxDepth.val = depth;
        }
        if(node.left!==null){
            preOrder(node.left,depth+1);
        }
        if(node.right!==null){
            preOrder(node.right,depth+1);
        }
    }
    preOrder(root,1);
    return maxDepth.val;
};