// Function fnc1: This function is triggered when div1 is clicked.
function fnc1(event) {
    // Check if the checkbox with id 'check' is selected.
    if (document.getElementById('check').checked) {
        // If the checkbox is checked, prevent the event from propagating to parent elements.
        // This stops the event from bubbling up to its parent elements.
        event.stopPropagation(); 
    }
    // Log a message to the console indicating that 'div 1' has been clicked.
    console.log('div 1 is clicked');
}

// Function fnc2: This function is triggered when div2 is clicked.
function fnc2() {
    // Log a message to the console indicating that 'div 2' has been clicked.
    console.log('div 2 is clicked');
}

// Add an event listener to the anchor element (with id 'anchor') to listen for click events.
document.getElementById('anchor').addEventListener('click', (event) => {
    // Prevent the default action of the anchor tag (e.g., navigation to a link).
    event.preventDefault();
});
