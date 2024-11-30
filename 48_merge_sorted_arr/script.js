// Initialize nums1 with the first three elements as sorted numbers and the rest as zeros
const nums1 = [1, 2, 3, 0, 0, 0];
// 'm' represents the number of valid elements in nums1
const m = 3; 
// Initialize nums2 with three sorted elements
const nums2 = [4, 5, 6]; 
// 'n' represents the number of valid elements in nums2
const n = 3; 

// Define the merge function to combine nums1 and nums2
const merge = (nums1, m, nums2, n) => {
  // Set i to point to the last valid element in nums1
  let i = m - 1; 
  // Set j to point to the last valid element in nums2
  let j = n - 1; 
  // Set k to point to the last position in nums1 for the merged output
  let k = m + n - 1; 

  // While there are elements in both nums1 and nums2
  while (i >= 0 && j >= 0) {
    // Compare the current elements from nums1 and nums2
    if (nums1[i] > nums2[j]) {
      // Place the larger element in the correct position in nums1
      nums1[k] = nums1[i]; // Copy nums1's element to the end
      i--; // Move the pointer in nums1 to the left
    } else {
      // Place the larger element in the correct position in nums1
      nums1[k] = nums2[j]; // Copy nums2's element to the end
      j--; // Move the pointer in nums2 to the left
    }
    k--; // Move the merge pointer to the left
  }

  // Copy any remaining elements from nums2 to nums1
  while (j >= 0) {
    nums1[k] = nums2[j]; // Copy the remaining element from nums2
    j--; // Move the pointer in nums2 to the left
    k--; // Move the merge pointer to the left
  }

  // Return the merged array
  return nums1;
};

// Call the merge function and log the result to the console
console.log(merge(nums1, m, nums2, n));
