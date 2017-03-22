/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let current,newHead=pre={next:head};
    while(pre!==null){
        current=pre.next;
        while(current!==null && current.val===val){
            current=current.next;
        }
        pre.next=current;
        pre=pre.next;
    }
    return newHead.next;
};