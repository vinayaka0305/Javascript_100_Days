function reverseWords(sentence,word){
    let newSentence = `${sentence} ${word}`;
    console.log(newSentence);
    return function reverseFnc(){
        return newSentence.split(' ').reverse().join(' ')
    }
}

const arg1 = "hello world";
const arg2 = "everyone";

const result = reverseWords(arg1,arg2);
console.log(result());