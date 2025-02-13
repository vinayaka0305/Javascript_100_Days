// Function to add a click event to a div by its unique ID
function addClickEventById(id) {
    // Get the element by its ID
    const element = document.getElementById(id);
    
    // Check if the element exists
    if (element) {
        // Add a click event listener to the element
        element.addEventListener('click', () => {
            alert(`Clicked div ID: ${id}`); // Display an alert with the div's ID
        });
    } else {
        // Log an error message if the element is not found
        console.error(`ID "${id}" not found`);
    }
}

// Function to add a click event to the first div with a specific class name
function addClickEventByClass(className) {
    // Select the first element that has the given class name
    const element = document.querySelector(`.${className}`);
    
    // Check if such an element exists
    if (element) {
        // Add a click event listener to the element
        element.addEventListener('click', () => {
            alert(`Clicked div class: ${className}`); // Display an alert with the class name
        });
    } else {
        // Log an error message if no element with the class name is found
        console.error(`Class "${className}" is not found`);
    }
}

// Add click events to each div by their ID
addClickEventById('div1');
addClickEventById('div2');
addClickEventById('div3');
addClickEventById('div4');
addClickEventById('div5');

// Add click event to the first div with the class "shared-class"
addClickEventByClass('shared-class');
