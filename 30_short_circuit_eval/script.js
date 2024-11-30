const isLoggedIn = true;  // Declaring a boolean variable 'isLoggedIn'

if(isLoggedIn){  // If 'isLoggedIn' is true, execute the block
    console.log('user is logged in')  // Logs 'user is logged in' because 'isLoggedIn' is true
}

// Short circuit evaluation

const isLoggedOut = true;  // Declaring a boolean variable 'isLoggedOut'

isLoggedOut && console.log("user is logged out");  
// If 'isLoggedOut' is true, the right-hand side of '&&' is executed.
// This logs "user is logged out" as 'isLoggedOut' is true.

const login = null;  // Declaring a variable 'login' with a null value

login && console.log("please wait");  
// Since 'login' is null (falsy), the right-hand side of '&&' is not executed.
// Nothing is logged here because 'login' is falsy.


// This explains both the if statement and how short-circuit evaluation works with &&. If the left-hand side is falsy, the right-hand side is not executed.