/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let current=str1={str:""},str2={str:""};
    let inOrder = (node,direction)=>{
        if(node===null) return;
        if(node.left!==null){
            inOrder(node.left,"1");
        }
        current.str+=(direction+node.val);
        if(node.right!==null){
            inOrder(node.right,"2");
        }
    }
    let preOrder=(node,direction)=>{
        if(node===null) return;
        current.str+=(direction+node.val);
        if(node.left!==null){
            preOrder(node.left,"1");
        }
        if(node.right!==null){
            preOrder(node.right,"2");
        }
    }
    inOrder(p,"0");
    preOrder(p,"0");
    current=str2;
    inOrder(q,"0");
    preOrder(q,"0");
    console.log(str1.str,str2.str);
    return str1.str===str2.str;
};