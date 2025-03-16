function findUniqueElementAppearsOnce(arr) {
  const countNum = {};

  for (let num of arr) {
    countNum[num] = (countNum[num] || 0) + 1;
  }

  for (let num of arr) {
    if (countNum[num] === 1) {
      return num;
    }
  }
  return null;
}

console.log(findUniqueElementAppearsOnce([1, 2, 1, 3, 3, 4, 4]));
console.log(findUniqueElementAppearsOnce([7,8,9,8,7]));
