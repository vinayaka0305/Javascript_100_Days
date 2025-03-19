const arr = [1, 3, 3, 4, 3, 3, 3, 5];

// function findMajorityElement(arr) {
//   let candidate = null;
//   let count = 0;

//   for (let num of arr) {
//     if (count === 0) {
//       candidate = num;
//     }
//     count += num === candidate ? 1 : -1;
//   }

//   count = 0;
//   for (let num of arr) {
//     if (num === candidate) {
//       count++;
//     }
//   }
//   return count > Math.floor(arr.length / 2) ? candidate : -1;
// }

function findMajorityElement(arr) {
  const res = {};
  for (let num of arr) {
    res[num] = (res[num] || 0) + 1;

    if (res[num] > Math.floor(arr.length / 2)) {
      return num;
    }
  }
  return -1;
}

console.log(findMajorityElement(arr));
