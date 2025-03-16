function findLongesword(str) {
  const newStr = str.split(" ");
  let longest = "";

  for (let word of newStr) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  console.log(newStr);
  return longest;
}

function findLongesword1(str) {
  const nstr = str.split(" ");

  return nstr.reduce((max, curr) => {
    return curr.length > max.length ? curr : max;
  });
}

console.log(findLongesword("Javascript makes coding enjoyable"));
console.log(findLongesword1("Javascript makes coding enjoyable"));
