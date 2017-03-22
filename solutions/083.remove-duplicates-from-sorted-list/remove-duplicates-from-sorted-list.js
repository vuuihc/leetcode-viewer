/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current,pre=head;
    while(pre!==null){
        current = pre.next;
        while(current!==null && pre.val===current.val){
            current = current.next;
        }
        pre.next = current;
        pre = pre.next;
    }
    return head;
};