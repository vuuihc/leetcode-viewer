/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let reverseList = (head)=>{
        let next=pre=null;
        while(head!==null){
            next=head.next;
            head.next=pre;
            pre=head;
            head = next;
        }
        return pre;
    }
    if(head===null || head.next===null){
        return true;
    }
    let fast=slow=head;
    while(fast.next!==null && fast.next.next!==null){
        fast=fast.next.next;
        slow=slow.next;
    }
    slow.next = reverseList(slow.next);
    slow=slow.next;
    while(slow!==null){
        if(slow.val!==head.val){
            return false;
        }
        slow=slow.next;
        head=head.next;
    }
    return true;
};