function swap(strswap, value1, value2) {
    let temp = strswap[value1];
    strswap[value1] = strswap[value2]
    strswap[value2] = temp
}
function permute(strarr, start, end) {
    if (start== end) {
console.log(strarr)        
    } else {
        for (let i = 0; i < end+1; i++){
            swap(strarr, start, i);
            permute(strarr, start + 1, end)
            swap(strarr, start, i);
          

        }
    }
}
function prematureArray(strArray) {
    permute(strArray,0,strArray.length-1)
}

function swap1(thearr, value1, value2) {
    let temp = thearr[value1];
    thearr[value1] = thearr[value2]
    thearr[value2] = temp;
}
function theprematurArr(strArray, start, end) {
    if (start == end) {
        console.log(strArray)
    } else {
        for (let i = 0; i < end + 1; i++){
            swap(strArray, start , i)
            theprematurArr(strArray, start + 1, end)
            swap(strArray, start , i)
        }
    }
}
function preArray(theArray) {
    theprematurArr(theArray,0,theArray.length-1)
}

preArray(["a", "b", "c"])
////////////
function isPalindrome(word, firstletter, endletter) {
    if (firstletter >= endletter) {
        return true
    }
    if (word.charAt(firstletter) != word.charAt(endletter)) {
        return false;
    } else {
        return isPalindrome(word,firstletter+1,endletter-1)
    }
}
function isPalindromeRecursive(word) {
    return isPalindrome(word,0,word.length-1)
}
console.log(isPalindromeRecursive("dog"))