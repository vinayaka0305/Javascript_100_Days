//Both local and session storage are used to store the data in browser,but they have different lifetimes..

//session storage
//Data life-span : Only until the tab is closed
//scope: Only for current tab/window
//storage limit : Around 5MB
//Data Type: Stores Strings only


sessionStorage.setItem('name',"alice");
console.log(sessionStorage.getItem('name'));

sessionStorage.clear();


//local storage
//Data life-span : Stays even after closing the window
//scope: Available accorss all tabs/window
//storage limit : Around 5MB
//Data Type: Stores Strings only


localStorage.setItem("username","bod");
console.log(localStorage.getItem('username'));


