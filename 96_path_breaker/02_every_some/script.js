//every() checks if all elements in an array satisfy a condition. It returns true only if every element pass the test


//some() check if at least one element in array satisfy a condition. It return true if one element pass the test


const numbers = [2,4,6,8];

console.log(numbers.every((num)=>num%2 === 0));//true (All numbers are even)

console.log(numbers.some((num)=>num>5));//true (Some numbers are greater than 5)

console.log(numbers.some((num)=>num>10))//false no number is greater than 10


// Simple Explanation:
// every() is like a strict teacher 📏 → If all students pass, it says ✅ "OK", otherwise ❌ "FAIL".
// some() is like a relaxed teacher 😎 → If at least one student passes, it says ✅ "OK".




