// function checkPalidrome(num){
//     let str = num.toString();
//     let reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
// }

// console.log(checkPalidrome(121));
// console.log(checkPalidrome(1));

function checkPalidrome(num) {
  if (num < 0) return false; //negative numbers are not palindromes
  let original = num;
  let reversed = 0;
  while (num > 0) {
    let lastDigit = num % 10; //get the last digit
    reversed = reversed * 10 + lastDigit; //builing reversed number;
    num = Math.floor(num / 10); //removing last digit
  }
  return original === reversed; //check if original and reversed are same;
}

console.log(checkPalidrome(121));
