function groupAnagrams(words) {
    let anagramMap = {}; // Object to store anagrams grouped together

    // Step 1: Iterate over each word in the input list
    for (let word of words) {
        // Step 2: Sort the characters of the word to create a unique key for anagrams
        let sortWord = word.split('').sort().join(''); 
        // console.log(sortWord);

        // Step 3: If the sorted key doesn't exist, initialize an empty array
        if (!anagramMap[sortWord]) {
            anagramMap[sortWord] = [];
        }

        // Step 4: Add the original word to the corresponding anagram group
        anagramMap[sortWord].push(word);
        // console.log(anagramMap);
    }

    // Step 5: Return all values (subarrays) from the map
    return Object.values(anagramMap);
}

// Test case
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// Expected Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
