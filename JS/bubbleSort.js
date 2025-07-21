function swap(arr, value1, value2) {
    let temp = arr[value1]
    arr[value1] = arr[value2]
    arr[value2] = temp
}
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j <= i; j++){
            if (arr[i] < arr[j]) {
                swap(arr,i,j)
            }
        }
    }
    return arr;
}
let array1 = [4, 6, 1, 2, 3]
console.log(bubbleSort(array1))
function selectionSort(arr) {
    
    for (let i = 0; i < arr.length; i++){
      
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[i]) {
                i = j;
            }
        }
        if (i != j) {
            swap(arr,i,j)
        }
    }
    return arr;
}
console.log(selectionSort(array1))