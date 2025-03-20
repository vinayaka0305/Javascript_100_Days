function sortBoth(arr) {
  const wordsArr = [];
  const numsArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      wordsArr.push(arr[i]);
    } else {
      numsArr.push(arr[i]);
    }
  }
  wordsArr.sort();
  numsArr.sort((a, b) => a - b);

  // return [...numsArr,...wordsArr];

  const result = wordsArr
    .map((val, index) => val + " " + numsArr[index])
    .join(" ");
  return result;
}

const arr = [1, "apple", 3, "orange", 2, "banana"];

console.log(sortBoth(arr));
