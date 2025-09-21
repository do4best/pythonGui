function reverseString(str) {
    if (str === '') { return ''; }
    return reverseString(str.substr(1)) + str.charAt(0)
}
function raised(base, exp) {
    if (exp === 0) return 1;
    return base * raised(base,exp-1)
}
function arraySum(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + arraySum(arr.slice(1))
}
const reverse1=(str)=>(str === ''?'':str.substr(1)+str.charAt(0))
let string1 = "Find the god";
console.log(reverse1(string1))
console.log(raised(4, 0))
let arr = [2, 3, 4, 5, 6]

function rangeArray(start, end) {
    if (start === end) return [start]
    const numbers = rangeArray(start, end - 1)
    numbers.push(end)
    return numbers
}
console.log(arraySum(arr))
console.log(rangeArray(1, 10))
console.log(raised(9,4))