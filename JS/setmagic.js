function insersectSets(setA, setB) {
    let insersect = new Set();
    for (let ele of setB) {
        if (setA.has(ele)) {
            insersect.add(ele)
        }
    }
    return insersect
}

let A = new Set([1, 2, 3, 4]);
let B = new Set([2, 3, 5])
console.log(insersectSets(A,B))