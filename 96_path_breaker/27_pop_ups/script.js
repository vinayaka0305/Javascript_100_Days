//In js there are three main pop-up methods used to interact with users:

//1.Alter Box (alter());

//Display a simple popup message with OK button
//Used for showing notifications and warnings

alert('This is an alter box!')


//2.Confirm Box (confirm());

//Displays a popup with OK and Cancel buttons
//Retruns true if user clicks OK, and false if they click Cancel
//Used for cofirmation before performing an action
let result = confirm("Aru you sure?");
if(result){
    console.log('user clicked OK')
}else{
    console.log('user clicked Cancel')
}

//3.Prompt Box (promt());

//Displays a popup with text input field,OK and Cancel buttons
//Returns the user's input as a string if they click OK, otherwise it returns null
//Used for Collection input.

let name = prompt("Enter your name: ");

if(name){
    console.log(`Hello ${name}`)
}else{
    console.log(`no input provided`)
}

// Additional Popup Methods:

// Apart from the built-in popups, you can also use:

// Modal dialogs (<dialog> element in HTML) for a more customizable popup experience.
// Custom popups using JavaScript with div elements and CSS styles.
// Third-party libraries like SweetAlert (Swal.fire()) for better-looking alerts.