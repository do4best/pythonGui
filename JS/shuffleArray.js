// const shuffleArray = (items) => {
//     return items.map((item) => ({ sort: Math.random(), value: item })).sort((item1, item2) => item1.sort - item2.sort).map((a) => a.value);

// }
// const shuffleArray1 = (items) => {
//     for (let i = items.length - 1; i > 0; i--){
//         const j = Math.floor(Math.random() * (i + 1));
//         [items[i],items[j]] = [items[j],items[i]]
//     }
//     return items
// }


// console.log(shuffleArray(arr))
let arr = [5, 4, 1, 2, 3,3,1,1]
function findMatch(arr, ele) {
    let bucket=[]
    for (let i = 0; i < arr.length; i++){
        if (arr[i]=== ele) {
            bucket.push(i)
        }
       
    }
    return bucket;
    
}
console.log(findMatch(arr,1))