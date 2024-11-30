// Declare a constant variable named 'sentence' and assign it a string value.
const sentence = "i love coding in javascript";

// Define a function named 'shortestLenghtOfWord' that takes one parameter, 'sentence'.
const shortestLenghtOfWord = (sentence) => {
    // Split the 'sentence' into an array of words using a space (' ') as the separator.
    const words = sentence.split(' ');
    
    // Log the array of words to the console for viewing.
    console.log(words);
    
    // Create a new array that contains the lengths of each word in the 'words' array.
    const lengthOfEachWord = words.map((word) => word.length);
    
    // Log the array of word lengths to the console for viewing.
    console.log(lengthOfEachWord);
    
    // Find the smallest length from the 'lengthOfEachWord' array using Math.min() with spread operator.
    const smallestLength = Math.min(...lengthOfEachWord);
    
    // Log the smallest length to the console for viewing.
    console.log(smallestLength);
    
    // Return the smallest length found.
    return smallestLength;
}

// Call the 'shortestLenghtOfWord' function with 'sentence' as an argument and log the result to the console.
console.log(shortestLenghtOfWord(sentence));
