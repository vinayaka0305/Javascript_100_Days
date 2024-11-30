const asciiConverter = (word) => {
  const wordArr = word.split("");
  console.log(wordArr);
  const asciiArr = wordArr.map((val) => {
    return { char: val, ascii: val.charCodeAt() };
  });
  return asciiArr;
};

const toRoman = (num) => {
  const romanNumeral = [
    { value: 1000, numeral: "M" }, 
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];
  let result = "";

  for (const { value, numeral } of romanNumeral) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result;
};

let word = "vinayaka";
const result = asciiConverter(word);
result.forEach((obj) => {
  console.log(`${obj.char}-${obj.ascii}-roman-num is - ${toRoman(obj.ascii)}`);
});

console.log(toRoman(1));
console.log(toRoman(2));
console.log(toRoman(3));
console.log(toRoman(4));
console.log(toRoman(5));
console.log(toRoman(6));
console.log(toRoman(7));
console.log(toRoman(8));
console.log(toRoman(9));
console.log(toRoman(10));
