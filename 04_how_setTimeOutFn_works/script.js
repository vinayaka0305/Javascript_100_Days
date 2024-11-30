setTimeout(()=>{
    console.log('hello')
},0)

console.log('world')

//callstack 
//javascript starts by reading the first line
//set timeout is called, which is an asynchronous fn.It schedules the fn to be executed
// later(after the specified delay, which is 0 milliseconds here).

// callback (() => console.log('hello')) fn is sent to the callback queue to be executed later
//It's not executed immeadtiely because of javascript continues executing the synchronous code first
//console.log('world') is reqular synchronous fn call, so it's get added to tha call stack executed immeadiately

//event loop
//after synchronous code finishes, the call stack is empty
//the event loop check call back queue and sees that there is fn function (() => console.log('hello')) waiting to be executed.
//the event loop moves the callback from callback queue to the callstack

//callback execution
//now the callback (console.log('hello')) is executed and hello is printed


// Summary:
// Call Stack: Where JavaScript executes the current function.
// Event Loop: Continuously checks if the call stack is empty and if there are pending callbacks in the callback queue.
// Callback Queue: Where asynchronous functions wait until they can be executed.