// This function simulates getting some data
function getData(callback) {
  // setTimeout is used to simulate a delay, like waiting for data
  setTimeout(() => {
    console.log("timer"); // This message will show after 1 second
    callback(); // This calls the callback function passed to getData
  }, 1000); // Wait for 1000 milliseconds (1 second)
}

// Call getData and pass a function as a callback
getData(() => console.log("call back is executed")); // This message will show after the timer


