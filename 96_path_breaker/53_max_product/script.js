function findMaxProduct(arr) {
  let first = -Infinity;
  let second = -Infinity;
  let min1 = Infinity;
  let min2 = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
    if (arr[i] < min1) {
      min2 = min1;
      min1 = arr[i];
    } else if (arr[i] < min2 && arr[i] !== min1) {
      min2 = arr[i];
    }
  }
  const product1 = first * second;
  const product2 = min1 * min2;

  return Math.max(product1, product2);
}

console.log(findMaxProduct([1, 2, 3, 4, 5]));
