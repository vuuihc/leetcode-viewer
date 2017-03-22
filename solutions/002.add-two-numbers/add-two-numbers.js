/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // let reverseList = (head)=>{
    //     if(head===null) return head;
    //     let next = head.next,
    //         pre = head;
    //         pre.next = null;
    //     while(next!==null){
    //         let current = next;
    //         next = next.next;
    //         current.next = pre;
    //         pre = current;
    //     }
    //     return pre;
    // }
    let pre=head=l1,c=0,current;
    while(l1!==null && l2!==null){
        pre=l1;
        current = l1.val + l2.val + c;
        c = Math.floor(current/10);
        l1.val = current%10;
        l1=l1.next;
        l2=l2.next;
    }
    if(l2!==null){
        pre.next=l1=l2;
    }
    while(l1!==null){
        pre=l1;
        current = l1.val+c;
        c=Math.floor(current/10);
        l1.val=current%10;
        l1=l1.next;
    }
    if(c===1){
        pre.next = new ListNode(1);
    }
    return head;
};