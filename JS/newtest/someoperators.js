function calculator(num1, num2, opt) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "input should be Numbers"
    }
    let result ;
    switch (opt) {
        case "+":
            result = "Total is: " +num1 + num2;
            break;
        case "-":
            result= "Differenc is: " + (num1 - num2);
            break;
        
        case "/":
            if(num2 === 0) return "Division by Zero Error"
            result = num1 / num2;
            break;
        
        case "*":
            result = num1 * num2;
            break;
        case "**":
            result = num1 ** num2;
            break;
        case "%":
            if(num2 === 0 ) return "Divison by Zero Error"
            result = num1 % num2;
            break;
        default:
            return "Invalid Operator"
        
        
    }
    return result;

}
function countOccurence(str, char) {
    return str.split(char).length-1
}
function enhanceCountOccurence(str, char, caseSensitive = true) {
    if (typeof str !== "string" || typeof char !== "string" || char.length === 0) {
        return 0;
    }
    if (!caseSensitive) {
        str = str.toLowerCase();
        char = char.toLowerCase();
        
    }
    let count = 0;
    let pos = str.indexOf(char);
    while (pos !== -1) {
        count++;
        pos = str.indexOf(char, pos + char.length)
    }
    return count;
}
function findMax(arr) {
    return Math.max(...arr)
}
function findAnotherMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}
function enhaceFindAnnotherMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return undefined;
    }
    let max = arr[0]
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] !== "number" || isNaN(arr[i])) continue;
        if (arr[i] > max || typeof max !== "number" || isNaN(arr[i] || typeof max === "object")) {
            max = arr[i]
        }
    }
    return max;
}
export {calculator,countOccurence,enhanceCountOccurence,findMax,findAnotherMax,enhaceFindAnnotherMax}