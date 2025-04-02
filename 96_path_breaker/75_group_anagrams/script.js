function groupAnagrams(words) {
    const map = new Map(); // Create a map to store groups of anagrams

    for (let word of words) {
        let sorted = word.split("").sort().join(''); // Sort letters of the word to get a unique key
        // console.log(sorted); // Debugging: Print sorted key

        if (!map.has(sorted)) { 
            map.set(sorted, []); // If key does not exist, create a new empty array
        }
        map.get(sorted).push(word); // Add the word to the corresponding anagram group
    }

    console.log(map); // Debugging: Print the map to see grouped anagrams
    return Array.from(map.values()); // Convert map values to an array and return the result
}

// Example usage
const words = ["rat", "tar", "art", "bat", "tab", "hello"];
console.log(groupAnagrams(words));
