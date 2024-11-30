const arr = [1, 2, 3];
// Copying the array 'arr' using the spread operator
const copiedArr = [...arr];
console.log(copiedArr);  // Output: [1, 2, 3]

// Combining two arrays 'arr' and 'arr2' using the spread operator
const arr2 = [4, 5, 6];
const combinedArr = [...arr, ...arr2];
console.log(combinedArr);  // Output: [1, 2, 3, 4, 5, 6]

// Object copy example
const marvelHeros = {
    name: "hulk",
    age: 30
};
// Copying the 'marvelHeros' object using the spread operator
const copyOfHeros = { ...marvelHeros };
console.log(copyOfHeros);  // Output: { name: "hulk", age: 30 }

// Combining two objects 'marvelHeros' and 'dcHeros' using the spread operator
const dcHeros = {
   dcHeroName: "superman",
   dcheroAge: "1000"
};
// Creating a new object by combining 'marvelHeros' and 'dcHeros'
const combinedHeros = { ...marvelHeros, ...dcHeros };
console.log(combinedHeros);  // Output: { name: "hulk", age: 30, dcHeroName: "superman", dcheroAge: "1000" }

// Key Comments:
// Array Copy: const copiedArr = [...arr]; creates a shallow copy of arr using the spread operator.
// Array Combination: const combinedArr = [...arr, ...arr2]; combines both arrays into one.
// Object Copy: const copyOfHeros = { ...marvelHeros }; copies the properties of marvelHeros into a new object.
// Object Combination: const combinedHeros = { ...marvelHeros, ...dcHeros }; merges the properties of both objects into a new object. If both objects had the same property names, the values from dcHeros would override the ones from marvelHeros.
