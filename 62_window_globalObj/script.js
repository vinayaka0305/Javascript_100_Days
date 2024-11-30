var name = "vinayaka"

//since var is used name becomes a property of window, so window.name will store"vinayaka"

console.log(window.name);


const language = "kannada"

//const is a block scope,so it does not become a property of the window object
console.log(window.language); //undefined

// In js the window object represents the main browser window that is open on your screen

//It is the global object for the entire web page.
//This means any variables or functions you create in global scope(not inside a function or object) automatically become properties of window.

//window object:
//The global object which holds all global variables and functions.
//Any variable declared with var becomes a property of window 

//var variables are automatically attached to the window in global scope, but let and const are not
 

