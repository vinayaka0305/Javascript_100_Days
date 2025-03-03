const arr = [1, 2, 3, 4, 5];

const doubled = arr.map((num) => num * 2);

console.log(doubled);

const evens = arr.filter((num) => num % 2 === 0);

console.log(evens);

// map(): Transforms each element in an array and creates a new array with the modified values.
// filter(): Selects elements from an array based on a condition and creates a new array with only those elements.

// map() changes each element.

// filter() removes elements that don’t match the condition.
