/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var MinHeap = function(){
        this.arr = [null];
    };
    MinHeap.prototype.min = function(){
        return this.arr[1];
    }
    MinHeap.prototype.pop = function(){//从堆中取出最值
        if(this.arr.length<2) return;//如果堆是空的，返回
        if(this.arr.length===2) return this.arr.pop();//如果只有根节点了，返回
        let r = this.arr[1];//暂存最值
        this.arr[1] = this.arr.pop();//把树中最后一个结点放到根节点上
        let index = 1;
        while(2*index<this.arr.length){//下沉操作，如果还有子节点，就将index节点与当前节点比较，保证根节点到底部保持大小关系（堆的定义）
            let child = 2*index;
            if(child+1 < this.arr.length && this.arr[child+1].val < this.arr[child].val){
                child++;
            }
            if(this.arr[index].val <= this.arr[child].val){
                break;
            }
            let temp = this.arr[index];
            this.arr[index] = this.arr[child];
            this.arr[child] = temp;
            temp = null;
            index = child;
        }
        return r;
    }
    MinHeap.prototype.add = function(node){//入堆操作
        this.arr.push(node);//把新节点加到底部
        bubble.call(this,this.arr.length-1);//进行上浮操作
        function bubble(index){
            let self = this;
            while(index>1){
                let parent = Math.floor(index/2);
                if(self.arr[parent].val <= self.arr[index].val){
                    break;
                }
                let temp = self.arr[parent];
                self.arr[parent] = self.arr[index];
                self.arr[index] = temp;
                index = parent;
            }
        }
    }
    MinHeap.prototype.isEmpty = function(){
        return this.arr.length === 1;
    }
    MinHeap.prototype.print = function(){
        console.log(this.arr);
    }
    let head = new ListNode(),
        tail=head,
        heap = new MinHeap();
    for(let list of lists){//把每一个非空链表的头部入堆
        if(list!==null){
            heap.add(list);
        }
    }
    // console.log(heap.isEmpty());
    while(!heap.isEmpty()){//出堆，把出堆节点的下一个节点（如果有）入堆
        tail.next = heap.pop();
        tail = tail.next;
        if(tail.next!==null){
            heap.add(tail.next);
        }
    }
    return head.next;
};