/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root===null) return [];
    let queue=[root],left=0,right=1,counter=1,nextCounter=0;result=[],current=[];
    while(right-left>0){
        let top=queue[left++];
        counter--;
        current.push(top.val);
        if(top.left!==null){
            queue[right++]=top.left;
            nextCounter++;
        }
        if(top.right!==null){
            queue[right++]=top.right;
            nextCounter++;
        }
        if(counter===0){
            result.push(current.concat());
            current=[];
            counter=nextCounter;
            nextCounter=0;
        }
    }
    return result;
};