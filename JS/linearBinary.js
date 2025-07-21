function linearBinar(arr, value) {
    for (let i = 0; arr.length; i++){
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}
let array = [1, 2, 3, 4, 5, 6]
console.log(linearBinar(array,4))