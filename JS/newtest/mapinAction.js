function frequencyWord(str) {
    let words = str.toLowerCase().split(/\W+/);
    const wordStorage = new Map();
    for (let word of words) {
        if (word === '') continue;
        if (wordStorage.has(word)) {
            wordStorage.set(word, wordStorage.get(word) + 1)
            
        } else {
            wordStorage.set(word,1)
        }
    }
    return wordStorage;
}
let findWords = "This is amazing and find the trurh and lies"
console.log(frequencyWord(findWords))

let empty = new Map([[1,'get']])
console.log(empty)
