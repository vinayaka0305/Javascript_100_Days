// Select the input element with the ID 'search-input' from the DOM
const searchInput = document.querySelector('#search-input');

// Select the output element with the ID 'output' from the DOM
const output = document.querySelector('#output');

// Function to create a debounced version of a function
// Parameters:
// - fn: The function to debounce
// - delay: The debounce delay in milliseconds
const myDebounce = (fn, delay) => {
    let timerId; // Variable to store the ID of the timer
    return (...arg) => { // Return a new function that accepts any number of arguments
        clearTimeout(timerId); // Clear the previous timer to reset the delay
        timerId = setTimeout(() => { // Set a new timer to invoke the function after the delay
            fn(...arg); // Execute the provided function with the arguments passed
        }, delay);
    };
};

// Function to handle the input event
// This function updates the text content of the output element with the value of the input
const handelSearchInput = (e) => {
    output.textContent = e.target.value; // Update the output with the current input value
};

// Create a debounced version of the handelSearchInput function
// This ensures the function is invoked only after the input has stopped changing for 1000ms
const debounceSearch = myDebounce(handelSearchInput, 1000);

// Add an event listener to the search input
// The event listener listens for the 'input' event and calls the debounced function
searchInput.addEventListener('input', debounceSearch);
