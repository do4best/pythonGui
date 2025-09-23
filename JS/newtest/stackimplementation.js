export class Stack{
    constructor() {
        this.maxSize = 100;
        this.top = -1
        this.stack = []
     }
    push(item) { 
        if (this.isFull()) {
            return false;
        }
        this.top++;
        this.stack[this.top] = item;
        return true;
    }
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        this.top--;
        return this.stack.pop()
     }
    isEmpty() {
        return this.top === -1
     }
    isFull() {
        return this.top === this.maxSize - 1;
     }
    peep() {
        if (this.isEmpty()) {
            return null
        }
        return this.stack[this.top]
        
    }
}
export class Enque{
    constructor() { 
        this.head = 0;
        this.tail = 0;
        this.maxSize = 100;
        this.queue=[]
    }
    enque(value) { 
        if (this.isFull()) {
            return false
        }
        this.queue[this.tail] = value;
        this.tail++
        return true;
    }
    deque() {
        const item = this.enque[this.head]
        this.head++;
        return item;
    }
    peep() {
        return this.queue[this.head]
    }
    isEmpty() {
        return this.getLength() === 0;
     }
    isFull() { 
        return this.getLength() === this.maxSize;
    }
    getLength() {
        return this.tail - this.head;
     }
    
}