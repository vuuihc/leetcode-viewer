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
var minDepth = function(root) {
    let minDepth={val:1e10};
    let postOrder=(node,depth)=>{
        if(node===null) return;
        if(node.left!==null){
            postOrder(node.left,depth+1);
        }
        if(node.right!==null){
            postOrder(node.right,depth+1);
        }
        if(node.left===null && node.right===null && depth<minDepth.val){
            minDepth.val = depth;
        }
    }
    postOrder(root,1);
    if(minDepth.val===1e10) minDepth.val=0;
    return minDepth.val;
};