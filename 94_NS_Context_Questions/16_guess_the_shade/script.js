// Select the HTML elements
const colourValElement = document.querySelector("#colourValue"); // Displays the target color in RGB format
const answerElement = document.querySelector("#answer"); // Displays feedback messages (Correct/Wrong)
const buttons = document.querySelectorAll(".colourButton"); // Select all color buttons
const resetButton = document.querySelector("#resetButton"); // Reset button

let correctColor; // Variable to store the correct RGB color

// Function to generate a random RGB color
const randomColor = () => {
  const r = Math.floor(Math.random() * 256); // Random red value (0-255)
  const g = Math.floor(Math.random() * 256); // Random green value (0-255)
  const b = Math.floor(Math.random() * 256); // Random blue value (0-255)

  return `rgb(${r},${g},${b})`; // Return the color in RGB string format
};

// Utility function to normalize RGB colors for comparison
// Removes extra spaces and converts to lowercase for consistent comparison
const normalizeColor = (color) => color.replace(/\s+/g, "").toLowerCase();

// Function to reset the game
const resetGame = () => {
  // Clear the answer message
  answerElement.textContent = "";

  // Generate a new target color
  correctColor = randomColor();

  // Display the correct color in the header
  colourValElement.textContent = correctColor;

  // Randomly assign the correct color to one of the buttons
  const correctBtnIndex = Math.floor(Math.random() * buttons.length);

  // Assign colors to buttons
  buttons.forEach((btn, index) => {
    // If this is the correct button, assign the correct color
    // Otherwise, assign a random color
    const color = index === correctBtnIndex ? correctColor : randomColor();
    btn.style.backgroundColor = color; // Set button's background color
  });
};

// Add click event listeners to all buttons
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const clickedColor = normalizeColor(btn.style.backgroundColor); // Get and normalize the button's color

    // Check if the clicked color matches the correct color
    if (clickedColor === correctColor) {
      answerElement.textContent = "Correct!"; // Display "Correct!" if the color matches
    } else {
      answerElement.textContent = "Wrong answer! guess again!"; // Otherwise, display a wrong answer message
    }
  });
});

// Add click event listener to the reset button
resetButton.addEventListener("click", resetGame);

// Initialize the game on page load
resetGame();
