function linearBinar(arr, value) {
    for (let i = 0; arr.length; i++){
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}
function binarySearch(arr, value) {
    let lowEnd = 0;
    let highEnd = arr.length - 1
    while (lowEnd <= highEnd) {
        let midRange = Math.floor((lowEnd + highEnd) / 2)
        if (arr[midRange] === value) {
        return  midRange
        } else if (value > arr[midRange]) {
            lowEnd = midRange
        } else {
            highEnd = midRange
        }
            
        }
retunr - 1
}


let array = [1, 2, 3, 4, 5, 6]
console.log(linearBinar(array,4))