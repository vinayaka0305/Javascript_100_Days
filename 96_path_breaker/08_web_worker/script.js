//A web worker is a way to run the JS in the background without stopping the main page
//why use web worker

//Helps prevent the page from freezing during heavy tasks
//Runs in separate thread(does't block the main page)
//Useful big calculations,data-processing, or background tasks


let worker = new Worker("worker.js"); // Create a worker

worker.postMessage(5); // Send number 5 to the worker

worker.onmessage = function(event) {
    console.log("Result from worker:", event.data); // Output: 10
};

// In Simple Words:
// 📌 Without Web Workers → If you do heavy work, the page freezes and becomes slow.
// 📌 With Web Workers → The work runs in the background, and the page stays smooth.