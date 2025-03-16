function separateNumbersAndLetter(str){
    const letters = str.replace(/\d/g,"")//removes digits
    const numbers = str.replace(/\D/g,"")//removes non-digits
    return[letters,numbers]
}

const str = "a1b2c3";

console.log(separateNumbersAndLetter(str));