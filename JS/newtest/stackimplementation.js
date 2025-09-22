class Stack{
    constructor() {
        this.maxSize = 100;
        this.stack = []
        this.top = -1
        
    }
    push(value) {
        if (this.isFull()) {
            return false;
        }
      
        this.top++;
        this.stack[this.top] = value;
        return true;
    }
    isFull() {
        return this.top === this.maxSize - 1;
    }
    isEmpty() {
        return this.top === -1
    }
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        this.top--;
        return this.stack.pop()
    }
}
let stack = new Stack();

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
console.log(stack)