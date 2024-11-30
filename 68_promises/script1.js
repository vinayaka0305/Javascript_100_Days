// Create a new promise that will either resolve (succeed) or reject (fail)
let promise = new Promise((res, rej) => {
    // Use setTimeout to simulate a delay (like waiting for data)
    setTimeout(() => {
        res("data received"); // Resolve the promise with the message "data received" after 1 second
    }, 1000); // 1000 milliseconds = 1 second
});

// Handle the resolved promise with .then()
// .then() executes when the promise is successfully resolved
// promise.then(res => console.log(res)); // Output the resolved value ("data received") to the console

/// finally there is async and await built on top of the promises

//A cleaner, more readable way 

// Define an asynchronous function called getData
async function getData() {
    // Wait for the promise to resolve and assign its result to the 'data' variable
    let data = await promise;
    
    // Log the resolved value of the promise (data) to the console
    console.log(data);
}

// Call the getData function, which starts the asynchronous operation
getData();
