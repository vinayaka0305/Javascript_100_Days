// Selecting the div container where numbers will be displayed
const num = document.querySelector("#num");

// Selecting the "Previous" and "Next" buttons
const prevBtn = document.querySelector("#back-btn");
const nextBtn = document.querySelector("#next-btn");

// Initial state: Set the current page to 1
let currPage = 1;

// Define how many numbers should be displayed per page
let numbersPerPage = 5;

// Function to render numbers based on the current page
function renderNums() {
  // Clear the previous numbers
  num.innerHTML = "";

  // Calculate the starting number for the current page
  let startNum = (currPage - 1) * numbersPerPage + 1;

  // Calculate the ending number for the current page
  let endNum = startNum + numbersPerPage - 1;

  // Loop through and create div elements for each number
  for (let i = startNum; i <= endNum; i++) {
    const div = document.createElement("div");
    div.textContent = i; // Set the text to the number
    num.appendChild(div); // Append the div to the container
  }

  // Disable the "Previous" button when on the first page
  prevBtn.disabled = currPage === 1;
}

// Event listener for "Next" button
nextBtn.addEventListener("click", () => {
  currPage++; // Move to the next page
  renderNums(); // Re-render numbers
});

// Event listener for "Previous" button
prevBtn.addEventListener("click", () => {
  if (currPage > 1) {
    currPage--; // Move back to the previous page
    renderNums(); // Re-render numbers
  }
});

// Initial render: Display numbers for the first page on page load
renderNums();
