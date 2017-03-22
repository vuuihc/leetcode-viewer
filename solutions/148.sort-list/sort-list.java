/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode sortList(ListNode head) {
        if(head==null||head.next==null) return head;
        ListNode fast=head,slow=head;
        while(fast.next!=null && fast.next.next!=null){
            fast = fast.next.next;
            slow = slow.next;
        }
        fast = slow.next;
        slow.next = null;
        fast = sortList(fast);
        slow = sortList(head);
        return merge(fast,slow);
    }
    public ListNode merge(ListNode head1,ListNode head2){
        ListNode pre = new ListNode(0),head = pre;
        while(head1!=null && head2!=null){
            if(head1.val<=head2.val){
                pre.next = head1;
                head1 = head1.next;
            }else{
                pre.next = head2;
                head2 = head2.next;
            }
            pre = pre.next;
        }
        if(head2!=null){
            pre.next = head2;
        }
        if(head1!=null){
            pre.next = head1;
        }
        return head.next;
    }
}