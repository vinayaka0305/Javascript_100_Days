function findMostFrequentChar(str) {
    let charCount = {};
    let maxChar = '';
    let maxCnt = 0;

    for(let char of str){
        charCount[char] = (charCount[char] || 0)+1;

        if(charCount[char]>maxCnt){
            maxChar = char;
            maxCnt = charCount[char]
        }
    }
    return maxChar;
}

console.log(findMostFrequentChar("abcd"));
console.log(findMostFrequentChar("javascript"));
