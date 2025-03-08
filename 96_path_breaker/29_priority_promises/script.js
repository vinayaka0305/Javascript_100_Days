//In js promises has highest priority than setTimeout() in the execution order

//How js handles tasks
//Js has two main queues for handling tasks
// 1.Microtask Queue -> Promises go here(Higher Priority);
// 2.Macrotask Queue -> setTimeout() goes here(Lower Priority);

//Execution Order?

//Promises(.then()) runs first because they are in microtask queue;
//setTimeout() runs lates because it is in macrotask queue;


console.log("Start");

setTimeout(()=>{
    console.log("setTimeout executed")
},0);

Promise.resolve().then(()=>{
    console.log('promise executed')
})

console.log("End")


// Why does the Promise run first?

// Even though setTimeout() has 0ms, it still goes to the Macrotask Queue and runs after Promises.
// Promises always run right after the main script finishes because they are in the Microtask Queue.