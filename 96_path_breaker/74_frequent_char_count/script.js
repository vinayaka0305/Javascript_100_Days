function findMostFrequentCharAndCount(str){

    const freqMap = {};

    for(let char of str){
        freqMap[char] = (freqMap[char] || 0) +1;

        if(freqMap[char]>1){
            return {char:char,count:freqMap[char]}
        }
    }
    return null;

}


console.log(findMostFrequentCharAndCount("javascript"))