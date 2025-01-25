function anagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

//   console.log(sortedStr1);
//   console.log(sortedStr2);

  return sortedStr1 === sortedStr2;
}

let str1 = "AbC";
let str2 = "cBA";

const ans = anagram(str1, str2);
console.log(ans);
