// Initialize the total sum to 50 (default maximum sum limit)
let totaSum = 50;

// Selectors for the two range input elements
let selectorOne = "#range-a-holder input";
let selectorTwo = "#range-b-holder input";

// Initialize the values for range A and range B
let rangeAvalue = 0;
let rangeBvalue = 50;

/**
 * Handler function when the max-sum input value changes.
 * It updates the total sum limit and adjusts the range inputs accordingly.
 */
function maxSumChangeHandler(event) {
  // Update the total sum based on the input value
  totaSum = Number(event.target.value);

  // Get the current values of both range inputs
  rangeAvalue = Number(document.querySelector(selectorOne).value);
  rangeBvalue = Number(document.querySelector(selectorTwo).value);

  // Adjust the max values for both range inputs based on the new total sum
  settingMaxValues();
}

/**
 * Handler function for range A input changes.
 * It updates the display and adjusts the range B maximum value.
 */
function rangeAhandler(event) {
  // Update the value of range A based on the slider's current position
  rangeAvalue = Number(event.target.value);

  // Display the updated value for range A
  document.getElementById("range-a-value").innerHTML = rangeAvalue;

  // Adjust the max values for both range inputs to ensure they do not exceed the total sum
  settingMaxValues();
}

/**
 * Handler function for range B input changes.
 * It updates the display and adjusts the range A maximum value.
 */
function rangeBhandler(event) {
  // Update the value of range B based on the slider's current position
  rangeBvalue = Number(event.target.value);

  // Display the updated value for range B
  document.getElementById("range-b-value").innerHTML = rangeBvalue;

  // Adjust the max values for both range inputs to ensure they do not exceed the total sum
  settingMaxValues();
}

/**
 * Function to set the maximum values for both range inputs
 * and update the sum display to prevent exceeding the total sum.
 */
function settingMaxValues() {
  // Update the displayed sum of both range inputs
  document.getElementById("sum").innerHTML = rangeAvalue + rangeBvalue;

  // Set the maximum value for range A based on the current value of range B
  document.querySelector(selectorOne).max = totaSum - rangeBvalue;

  // Set the maximum value for range B based on the current value of range A
  document.querySelector(selectorTwo).max = totaSum - rangeAvalue;
}
