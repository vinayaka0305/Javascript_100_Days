//A callback is a function that is passed as an argument to another function and is executed later

//why use callbacks?

//helps run code after something finishes(like fetching data);
//used in asynchronous programming(e,g..setTimeout,Api calls)

//Example 1 (Basic Callback);

function greet(name,callback){
    console.log(`hello ${name}`)
    callback()
}

function sayBye(){
    console.log('Good bye!')
}

greet("Alice",sayBye)

//Example 2 callback in setTimeout(Async);

setTimeout(()=>{
    console.log(`This runs after 2 seconds`)
},2000)

//In simple words

//A callback function is a function that is given to another function to be called later.