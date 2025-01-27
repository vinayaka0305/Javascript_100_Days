// Select the necessary elements from the DOM
const notesList = document.querySelector('#notesList'); // The unordered list to display notes
const saveButton = document.querySelector('#saveButton'); // The button to save a new note
const noteInput = document.querySelector('#noteInput'); // The input field for entering new notes

// Load existing notes from local storage when the page loads
const storedNotes = JSON.parse(localStorage.getItem('notes')) || []; // Retrieve notes from local storage or initialize an empty array
storedNotes.forEach((note) => createElement(note)); // Iterate over the stored notes and create list elements for each

// Event listener for the save button to add new notes
saveButton.addEventListener('click', () => {
    const val = noteInput.value; // Get the input value
    if (val.trim() === '') return; // Ignore empty or whitespace-only inputs

    const storedNotes = JSON.parse(localStorage.getItem('notes')) || []; // Retrieve the current notes array from local storage
    storedNotes.push(val); // Add the new note to the array
    localStorage.setItem('notes', JSON.stringify(storedNotes)); // Save the updated array back to local storage

    createElement(val); // Create a new list element for the note and display it
    noteInput.value = ''; // Clear the input field after saving
});

// Function to create and display a list element for a note
function createElement(note) {
    let li = document.createElement('li'); // Create a new list item element
    li.textContent = note; // Set the text content of the list item to the note text

    let loadBtn = document.createElement('button'); // Create a "load" button for the note
    loadBtn.textContent = "load"; // Set the button's text to "load"
    li.appendChild(loadBtn); // Append the button to the list item

    notesList.appendChild(li); // Append the list item to the notes list

    display(loadBtn, note); // Attach functionality to the button to display the note when clicked
}

// Function to attach an event listener to the "load" button
function display(btn, val) {
    btn.addEventListener('click', () => {
        alert(val); // Show an alert with the note's text when the button is clicked
    });
}
