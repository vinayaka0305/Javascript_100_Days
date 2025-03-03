const arr = [-2, 1, 3, 4];

function findFirSecThirdLargest(arr) {
  // Initialize first, second, and third largest numbers with a very small value
  let fir = -Infinity;
  let sec = -Infinity;
  let third = -Infinity;

  // Loop through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // If the current element is greater than the first largest
    if (arr[i] > fir) {
      // Shift down the values
      third = sec; // Second largest becomes third largest
      sec = fir; // First largest becomes second largest
      fir = arr[i]; // Update first largest with the current element
    }
    // If the current element is not the first largest but greater than second largest
    else if (arr[i] > sec && arr[i] != fir) {
      third = sec; // Second largest becomes third largest
      sec = arr[i]; // Update second largest with the current element
    }
    // If the current element is not the first or second largest but greater than third largest
    else if (arr[i] > third && arr[i] != sec) {
      third = arr[i]; // Update third largest
    }
  }

  // Print the first, second, and third largest numbers
  console.log(fir, sec, third);
}

// Call the function with the given array
findFirSecThirdLargest(arr);


function findFirSecThirdSmallest(arr) {
    // Initialize first, second, and third smallest numbers with Infinity (a very large value)
    let fir = Infinity;
    let sec = Infinity;
    let third = Infinity;

    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // If the current element is smaller than the first smallest
        if (arr[i] < fir) {
            // Shift down the values
            third = sec;  // Second smallest becomes third smallest
            sec = fir;    // First smallest becomes second smallest
            fir = arr[i]; // Update first smallest with the current element
        }
        // If the current element is not the first smallest but smaller than the second smallest
        else if (arr[i] < sec && arr[i] != fir) {
            third = sec;   // Second smallest becomes third smallest
            sec = arr[i];  // Update second smallest with the current element
        }
        // If the current element is not the first or second smallest but smaller than third smallest
        else if (arr[i] < third && arr[i] != sec) {
            third = arr[i]; // Update third smallest
        }
    }

    // Print the first, second, and third smallest numbers
    console.log(fir, sec, third);
}

// Example usage
const arr1 = [-2, 1, 3, 4];
findFirSecThirdSmallest(arr1);

