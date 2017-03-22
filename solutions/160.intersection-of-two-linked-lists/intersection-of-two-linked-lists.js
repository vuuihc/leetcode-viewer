/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let head1=headA,head2=headB,count1=0,count2=0,diff;
    while(head1!==null){
        head1 = head1.next;
        count1++;
    }
    while(head2!==null){
        head2 = head2.next;
        count2++;
    }
    if(count1>count2){
        head1=headA;
        head2=headB;
    }else{
        head1=headB;
        head2=headA;
    }
    diff = Math.abs(count1-count2);
    while(diff--){
        head1=head1.next;
    }
    while(head1!==head2 && head1!==null && head2!==null){
        head1=head1.next;
        head2=head2.next;
    }
    return head1;
};