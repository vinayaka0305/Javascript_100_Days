function findCompoudWords(words) {
    // Create a Set for fast lookup of words
    const wordSet = new Set(words);

    // Iterate through each word in the array
    for (let word of words) {
        // Temporarily remove the current word from the set to avoid self-matching
        wordSet.delete(word);

        // Check every possible split point in the word
        for (let i = 1; i < word.length; i++) {
            const prefix = word.slice(0, i); // Extract prefix
            const suffix = word.slice(i);    // Extract suffix
            // console.log(prefix,suffix)
            // If both prefix and suffix exist in the set, return the word
            if (wordSet.has(prefix) && wordSet.has(suffix)) {
                console.log(prefix,suffix)
                return word; // Found a compound word
            }
        }

        // Add the word back to the set for further iterations
        wordSet.add(word);
    }

    // If no compound word is found, return null
    return null;
}

// Example usage
const input = ["cat", "dog", "catdog", "bird", "fish"];
console.log(findCompoudWords(input)); // Output: "catdog"
