function privateCoutnyer() {
    let count = 0;
    return {
        increment: (value=1) => {
            count += value;
        },
        decrement: (value=1) => {
            count -= value;  
        },
        getValue: () => {
            return count;
        }
    }
}
let result = privateCoutnyer()
console.log(result.getValue())
result.increment()
console.log(result.getValue())
let arr = [1, 2, 3, 4]
const append = (arr1, ele) => {
    return [...arr1,ele]
}
console.log(append(arr, 8))
console.log(arr)
//concate array
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 1]
const mergeArray = (arr1, arr2) => arr1.concat(arr2)
let result1 = mergeArray(arr1, arr2)
result1.sort((e1, e2) => (e1 < e2 ? -1 : 1))
    console.log(result1)