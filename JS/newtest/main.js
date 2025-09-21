import { calculator, countOccurence, enhaceFindAnnotherMax, enhanceCountOccurence, findAnotherMax, findMax } from "./someoperators.js"

let num1 = 2
let num2 = 5
let opt = "-"
let result = calculator(num1, num2, opt)
let result2 = enhanceCountOccurence("this is great start",'a')
console.log(result2)
let cleanarr = [4, 8, 5, 1, 2, '55', [58]]
let arr = cleanarr.filter((x)=>typeof x === "number" && !isNaN(x))
console.log(findMax(arr))
console.log(findAnotherMax(arr))
console.log(enhaceFindAnnotherMax(arr))