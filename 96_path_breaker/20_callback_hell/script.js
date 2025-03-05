// Function to simulate fetching data (takes 1 second)
function getData(callback) {
    setTimeout(() => {
        console.log('Step 1: Data fetched');
        callback(); // Calls the next function
    }, 1000);
}

// Function to simulate processing data (takes 1 second)
function process(callback) {
    setTimeout(() => {
        console.log('Step 2: Data processed');
        callback(); // Calls the next function
    }, 1000);
}

// Function to simulate saving data (takes 1 second)
function saveData(callback) {
    setTimeout(() => {
        console.log('Step 3: Data saved');
        callback(); // Calls the final step
    }, 1000);
}

// Too many nested callbacks (callback hell)
getData(() => {  // Start fetching data
    process(() => {  // Once fetched, process it
        saveData(() => {  // Once processed, save it
            console.log('All steps completed!');  // Final message
        });
    });
});


//The code is deeply nested, making it messy and hard to maintain
//use promises(clean code)