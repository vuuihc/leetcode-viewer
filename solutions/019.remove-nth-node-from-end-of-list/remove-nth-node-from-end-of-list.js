/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let m=n,
        head1=head,
        cur=head,
        pre=preHead={next:head};
    while(m--){
        head1 = head1.next;
    }
    while(head1!==null){
        head1=head1.next;
        pre=cur;
        cur=cur.next;
    }
    if(cur.next===null)
        pre.next=null;
    else
        pre.next=pre.next.next;
    delete cur;
    return preHead.next;
};