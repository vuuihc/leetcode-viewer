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
var insertionSortList = function(head) {
    let newHead = {next:head};
    if(head){
        let head1 = head.next;
        head.next=null;//以head建立新链表
        while(head1!==null){//当前摘出来要添加到新链表里面
            let pre = newHead,
                target = head1;
                head1 = head1.next;
                curNode = pre.next;//每次从第一个开始遍历
            while(curNode!==null && curNode.val<=target.val){//直到curNode===null,此时pre是最后一个 或者某一个大于哨兵
                pre = curNode;
                curNode = curNode.next;
            }
            pre.next = target;
            target.next = curNode;
        }
    }
    return newHead.next;
};