import { Stack,Enque } from "./stackimplementation.js";

function reverString(str) {
    let stack = new Stack();
    for (let i = 0; i < str.length; i++){
        stack.push(str[i])
    }
    let reverseit="";
    while (!stack.isEmpty()) {
        reverseit += stack.pop()
    }
    return reverseit
}
let words = "mi perro es muy bonita"
console.log(reverString(words))
let enque = new Enque();
enque.enque('a')
enque.enque('b')
enque.enque('c')

console.log(enque)
enque.deque()
console.log(enque.peep())