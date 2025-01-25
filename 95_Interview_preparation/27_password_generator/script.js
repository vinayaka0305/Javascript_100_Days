// Select the necessary elements from the DOM
const result = document.querySelector('#result'); // To display the generated password
const passwordLength = document.querySelector('#length'); // Input for password length
const passwordUppercase = document.querySelector('#uppercase'); // Checkbox for uppercase letters
const passwordLowercase = document.querySelector('#lowercase'); // Checkbox for lowercase letters
const passwordNumbers = document.querySelector('#numbers'); // Checkbox for numbers
const passwordSymbols = document.querySelector('#symbols'); // Checkbox for symbols
const generateBtn = document.querySelector('#generate'); // Button to trigger password generation

// Character sets for each type of character (uppercase, lowercase, numbers, symbols)
const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVIWXYZ'; // Uppercase letters
const lowerChars = 'abcdefghijklmnopqrstuvwxyz'; // Lowercase letters
const numberChars = '0123456789'; // Numbers
const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?'; // Symbols

// Add an event listener to the "Generate Password" button
generateBtn.addEventListener('click', () => {
    // Get the password length from the input and convert it to an integer
    const length = parseInt(passwordLength.value);

    // Initialize an empty string to store the character set
    let charSet = '';

    // Based on user selections, add corresponding characters to the character set
    if (passwordUppercase.checked) charSet += upperChars; // Add uppercase characters if checked
    if (passwordLowercase.checked) charSet += lowerChars; // Add lowercase characters if checked
    if (passwordNumbers.checked) charSet += numberChars; // Add numbers if checked
    if (passwordSymbols.checked) charSet += symbolChars; // Add symbols if checked

    // If no character set was selected, the password cannot be generated
    if (charSet === '') {
        result.textContent = 'Please select at least one option.'; // Show a warning message if no options are selected
        return;
    }

    // Initialize an empty string to store the final password
    let password = '';

    // Loop through to generate the password of the desired length
    for (let i = 0; i < length; i++) {
        // Randomly select a character from the charSet and add it to the password string
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    // Display the generated password in the result area
    result.textContent = password;
});
