// Define two input strings
const str1 = "vinayaka";
const str2 = "bheeshma";

// Function to merge two strings alternatively
function mergeAlternately(str1, str2) {
    // Get the length of the longer string
    let length = Math.max(str1.length, str2.length);
    let result = ''; // Initialize an empty result string

    // Loop through both strings up to the maximum length
    for (let i = 0; i < length; i++) {
        // Add a character from str1 if available
        if (i < str1.length) {
            result += str1.charAt(i);
        }

        // Add a character from str2 if available
        if (i < str2.length) {
            result += str2.charAt(i);
        }
    }
    
    // Return the merged string
    return result;
}

// Call the function and print the merged result
console.log(mergeAlternately(str1, str2));

// Expected Output: "vbihneayashkmaa"
