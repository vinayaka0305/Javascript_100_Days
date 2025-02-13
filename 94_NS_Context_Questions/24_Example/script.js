// Selecting the input field where the user enters numbers
const inputAreaVal = document.querySelector("#inputArea");

// Selecting the button that will trigger the sorting operation
const btn = document.querySelector("button");

// Selecting the output area where the result will be displayed
const output = document.querySelector("#output");

// Adding a click event listener to the button
btn.addEventListener("click", () => {
  // Retrieving the user input as a string
  const nums = inputAreaVal.value;

  // Splitting the input string by commas and converting each value to a number
  const numArr = nums.split(",").map((val) => Number(val.trim()));

  // Sorting the array in descending order (largest to smallest)
  const largest = numArr.sort((a, b) => b - a);

  // Extracting the top 3 largest numbers and converting them to a comma-separated string
  const result = largest.slice(0, 3).join(",");

  // Displaying the result inside the output element
  output.innerHTML = result;
});
