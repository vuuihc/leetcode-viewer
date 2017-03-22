/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let result=[];
    let preOrder=(root,parentNodes)=>{
        if(root===null){
            return;
        }
        if(root.left===null && root.right===null){
            parentNodes += ("->"+root.val);
            result.push(parentNodes);
            return;
        }
        if(root.left!==null){
            preOrder(root.left,parentNodes+"->"+root.val);
        }
        if(root.right!==null){
            preOrder(root.right,parentNodes+"->"+root.val);
        }
    }
    if(root===null) return [];
    if(root.left===null && root.right===null) return [String(root.val)]
    preOrder(root.left,root.val);
    preOrder(root.right,root.val);
    return result;
};