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
function findMatch(arr, ele,compare=(a,b)=>a === b) {
    let bucket = []
    arr.forEach((item, idx) => {
        if (compare(item, ele)) {
            bucket.push({item:idx,value:item})
        }
    })
    return bucket;
    
}
console.log(findMatch(arr,1))