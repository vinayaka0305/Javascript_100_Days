// Select the element with id "result" to display the result message
const result = document.querySelector("#result");

// Select the element with id "flag-value" to display the value of the flag
const flagValue = document.querySelector("#flag-value");

// Define a function to display a message based on the value of the flag variable
function showMessage() {
  let flag; // Declare a variable 'flag' without assigning a value (undefined by default)
  console.log(flag);
  // Check the value of the flag
  if (flag) {
    // If flag is truthy, set the innerHTML of the "result" element to "First"
    result.innerHTML = "First";
    // Set the text content of "flagValue" to the value of flag
    flagValue.innerText = flag;
  } else {
    // If flag is falsy (e.g., undefined, null, false, 0, or an empty string), display "Second"
    result.innerHTML = "Second";
    // Set the text content of "flagValue" to the value of flag (will display as empty since flag is undefined)
    flagValue.innerText = flag;
  }
}

// Call the showMessage function to execute the above logic
showMessage();
