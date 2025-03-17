function findFirstNonRepeatingChar(str){

  const charCount = {};

    for(let char of str){
      charCount[char] = (charCount[char] || 0) +1;
    }
    console.log(charCount);

    for(let char of str){
      if(charCount[char] === 1){
        return char;
      }
    }
    return null;
}


console.log(findFirstNonRepeatingChar("vivinayaka"))