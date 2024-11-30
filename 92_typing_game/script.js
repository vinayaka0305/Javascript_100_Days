// API URL to fetch random quotes
const url = "http://api.quotable.io/random";

// Selecting essential HTML elements for displaying timer, WPM, quote, and container
const timerEle = document.querySelector("#timer");
const wpmEle = document.querySelector("#wpm");
const display = document.querySelector("#quote-display");
const container = document.querySelector("#container");

// Global variables
let timerId; // Holds the timer interval ID
let currIndex = 0; // Tracks the current character index of the quote
let quote; // Holds the current quote
let strokes; // Array to track the correctness of each typed character
let isTimerStarted = false; // Indicates if the timer has started

// Event listener for clicking inside the container
window.addEventListener("click", (e) => {
  if (container.contains(e.target)) {
    if (!isTimerStarted) {
      // Start timer on the first click
      startTimer();
    } else {
      // Reset everything when clicked again inside the container
      timerEle.innerHTML = "";
      currIndex = 0;
      stopTimer();
      resetStrokes();
      display.childNodes.forEach((node) => {
        node.classList.remove("correct");
        node.classList.remove("incorrect");
      });
    }
  }
});

// Starts the timer and updates it every 500ms
let startingTime;
function startTimer() {
  isTimerStarted = true;
  startingTime = new Date(); // Record the start time
  timerId = setInterval(() => {
    timerEle.innerHTML = getTimerTime(); // Update timer display
  }, 500);
}

// Calculates the elapsed time in seconds
function getTimerTime() {
  return Math.floor((new Date() - startingTime) / 1000);
}

// Stops the timer
function stopTimer() {
  clearInterval(timerId);
  isTimerStarted = false;
}

// Resets the strokes array to track the correctness of each character
function resetStrokes() {
  strokes = new Array(quote.length).fill(0);
}

// Fetches a random quote from the API
const getRandomQuotes = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.content; // Return only the content of the quote
};

// Fetches a new random quote and sets it up for typing
const fetchNewRandomQuotes = async () => {
  quote = await getRandomQuotes();
  if (isTimerStarted) {
    stopTimer();
    startTimer();
  }
  display.innerHTML = ""; // Clear the display area
  strokes = new Array(quote.length).fill(0); // Reset strokes array
  // Create a <span> for each character in the quote and add it to the display
  quote.split("").forEach((char) => {
    const span = document.createElement("span");
    span.innerHTML = char;
    display.appendChild(span);
  });
};
fetchNewRandomQuotes(); // Initial call to load the first quote

// Handles typing input
window.addEventListener("keydown", (e) => {
  if (isTimerStarted) {
    let charCode = parseInt(e.keyCode); // Get the character code of the key
    if (
      (charCode > 64 && charCode < 91) || // Letters
      (charCode > 96 && charCode < 123) || // Lowercase letters
      charCode === 32 ||
      charCode === 188 ||
      charCode === 186 || // Space, comma, semicolon
      charCode === 222 ||
      charCode === 190 ||
      charCode === 191 || // Quotation marks, period, question mark
      charCode === 49 ||
      charCode === 189 // Special keys
    ) {
      // Check if the typed character matches the quote character
      if (quote[currIndex] == e.key) {
        display.childNodes[currIndex].classList.add("correct");
        display.childNodes[currIndex].classList.remove("incorrect");
        strokes[currIndex] = 1; // Mark this character as correct
      } else {
        display.childNodes[currIndex].classList.add("incorrect");
        display.childNodes[currIndex].classList.remove("correct");
        strokes[currIndex] = 0; // Mark this character as incorrect
      }
      calculateWPM(); // Update WPM after every stroke
      currIndex++; // Move to the next character
      if (currIndex === quote.length) {
        // If the end of the quote is reached, fetch a new quote
        currIndex = 0;
        fetchNewRandomQuotes();
      }
    } else if (charCode === 8) {
      // Handle backspace
      if (currIndex === 0) return;
      currIndex--; // Move back to the previous character
      display.childNodes[currIndex].classList.remove("incorrect");
      display.childNodes[currIndex].classList.remove("correct");
    } else {
      console.log("not a key"); // Ignore other keys
    }
  }
});

// Calculates the Words Per Minute (WPM)
function calculateWPM() {
  if (getTimerTime() > 0) {
    wpmEle.innerHTML = Math.round(
      (correctStrokes() / 5.0 )/ (getTimerTime() / 60.0)
    );
  }
}

// Counts the number of correctly typed characters
function correctStrokes() {
  let count = 0;
  strokes.forEach((storke) => {
    if (storke) {
      count++;
    }
  });
  return count;
}
