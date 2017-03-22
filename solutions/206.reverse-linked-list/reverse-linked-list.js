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
var reverseList = function(head) {
    let newHead={next:null},current=null;
    while(head!==null){
        current=head;
        head=head.next;
        current.next = newHead.next;
        newHead.next=current;
    }
    return newHead.next;
};