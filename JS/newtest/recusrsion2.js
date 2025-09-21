export function reverseString(str) {
    if (str === '') { return ''; }
    return reverseString(str.substr(1)) + str.charAt(0)
}
export function raisedPower(base, exp) {
    if (exp === 0) return 1
    return base * raisedPower(base,exp-1)
}
export function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1))
}
export function rangeArray(start, end) {
    if (start === end) return [start]
    const numbers = rangeArray(start, end - 1)
    numbers.push(end)
    return numbers;
}
