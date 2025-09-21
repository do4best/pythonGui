function frequencyWord(word) {
    let Word = word.toLowerCase().split(/\W+/)
    const wordFrquency = new Map();
    for (word of Word) {
        if (wordFrquency === '') continue;
        if (wordFrquency.has(word)) {
            wordFrquency.set(word,wordFrquency.get(word)+1)
        } else {
            wordFrquency.set(word,1)
        }
    }
    return wordFrquency;
}

let words = "God is great and we need to find it and if it is"
console.log(WordFrquency(words))

function WordFrquency(word) {
    const yourword = word.toLowerCase().split(/\W+/)
    const theriWord = new Map()
    for (word of yourword) {
        if (word === ' ') continue;
        if (theriWord.has(word)) {
            theriWord.set(word,theriWord.get(word)+1)
        } else {
            theriWord.set(word,1)
        }
    }
    return theriWord;
}
