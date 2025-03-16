// function findMissingNumbers(arr, n) {
//     // Calculate the expected sum of numbers from 1 to n using the formula: sum = n * (n + 1) / 2
//     const expectedSum = (n * (n + 1)) / 2;
  
//     // Calculate the actual sum of numbers present in the given array
//     const actSum = arr.reduce((a, b) => a + b, 0);
  
//     // If the actual sum matches the expected sum, there are no missing numbers, return null
//     // Otherwise, return the difference, which is the missing number
//     return expectedSum === actSum ? null : expectedSum - actSum;
//   }

function findMissingNumbers(arr,n){
    let missigNum = [];
    let numberset = new Set(arr);

    for(let i=1;i<=n;i++){
        if(!numberset.has(i)){
            missigNum.push(i);
        }
    }
    return missigNum;
}
  
  // Test cases
  console.log(findMissingNumbers([1, 2, 4, 5], 5)); // Output: 3 (Missing number)
  console.log(findMissingNumbers([1, 2, 4, 5, 3, 6, 8, 9, 10], 10)); // Output: 7 (Missing number)
  