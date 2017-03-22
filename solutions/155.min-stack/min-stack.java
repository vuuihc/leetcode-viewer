public class MinStack {
    Stack<Integer> stack;
    Stack<Integer> minstack;
    /** initialize your data structure here. */
    public MinStack() {
        this.stack = new Stack();
        this.minstack = new Stack();
        minstack.push(Integer.MAX_VALUE);
    }
    
    public void push(int x) {
        // System.out.println("push "+x);
        // System.out.println("minstack peek "+minstack.peek());
        if(x<=minstack.peek())
            minstack.push(x);
        stack.push(x);
    }
    
    public void pop() {
        // if(stack.peek()==minstack.peek()){//????
        if(stack.peek()-minstack.peek()==0){
            minstack.pop();
        }
        stack.pop();
        
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMin() {
        return minstack.peek();
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */