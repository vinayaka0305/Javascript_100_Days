//the rest operator used to collect multiple values into a single array or object

//In function parameter(collectig arguments);

function sum(...numbers) {
  // console.log(numbers);
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4));

//destructuring arrays

const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first);
console.log(second);
console.log(rest);

//destructuring objects

const person = { name: "jhon", age: "30", city: "NY" };

const { name, ...rests } = person;

console.log(name);
console.log(rests);
