// Function to check if a number is prime
function isPrime(num) {
    // Prime numbers must be greater than 1
    if (num < 2) return false;
  
    // Loop from 2 to the square root of the number
    // If a number is divisible by any number in this range, it's not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; // If divisible, it's not a prime number
      }
    }
    return true; // If no divisors found, the number is prime
  }
  
  // Array of numbers to check
  const arr = [1, 2, 3, 4, 5];
  
  // Iterate through each number in the array
  arr.forEach((num) => {
    // Print whether the number is prime or not
    console.log(`${num} is ${isPrime(num) ? "prime" : "not aaa prime"}`);
  });
  