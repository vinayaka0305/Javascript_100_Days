// const fetchData = async () => {
//   // Declare an asynchronous function named fetchData
//   const data = "my data"; // Assign the string 'my data' to a constant variable called data
//   return data; // Return the value of the variable data
// };

// console.log(fetchData()); // Call fetchData() and log the returned Promise to the console

// //when ever we create  asynchronous function it will create a promise

const fetchData = async () => {
  const data = await "my data";
  console.log(data);
};

console.log("1");
fetchData();
console.log("2");

//we can't use await keyword until making an function asynchronous
//we need to specify a function async then only we can use await;

//the await keyword make our function to wait until the promise get resolved

//Promises:
// Promises came first in JavaScript (introduced in ES6, 2015) to handle asynchronous code (like fetching data from a server) in a cleaner way than using callbacks. A Promise represents an operation that will be completed in the future, either successfully (resolved) or with an error (rejected).

// // fetchData().then(data => {
//     console.log(data);  // Handle the resolved data
// }).catch(error => {
//     console.log(error); // Handle any error
// });



// Async/Await:
// Async/Await came later (in ES8, 2017) to make working with Promises even easier and more readable. It allows you to write asynchronous code in a way that looks more like regular, synchronous code. async declares that a function returns a Promise, and await pauses the function until the Promise is resolved, making the code easier to follow.

// const getData = async () => {
//     try {
//         const data = await fetchData();  // Wait for the promise to resolve
//         console.log(data);               // Handle the resolved data
//     } catch (error) {
//         console.log(error);              // Handle any error
//     }
// };


// In short:

// Promises: Are a cleaner way to handle asynchronous code compared to callbacks.

// Async/Await: Built on Promises but make the code look more like regular, step-by-step code, which is easier to read and understand.