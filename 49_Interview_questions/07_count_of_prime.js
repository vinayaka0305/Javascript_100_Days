//prime numbers are the numbers which are divisible by 1 and it self

function numberOfPrimes(N) {
  let count = 0;
  for (let i = 0; i <= N; i++) {
    if (isPrime(i)) {
      console.log(i, "is a prime number");
      count++;
    }
  }
  return count;
}

function isPrime(N) {
  if (N <= 1) return false;
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      return false;
    }
  }
  return true;
}

const n = 5;
console.log(
  `there are ${numberOfPrimes(n)} prime numbers less than equal to ${n}`
);
