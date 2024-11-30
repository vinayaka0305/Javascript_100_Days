// Defining a hero object with name, age, and aka (also known as)
const hero = {
    name: "steve rogers", // name property of hero object
    age: 130,             // age property of hero object
    aka: "captain america" // aka (alias) property of hero object
  };
  
  // Logging each property of the hero object individually
  console.log(hero.name); // Logs "steve rogers"
  console.log(hero.age);  // Logs 130
  console.log(hero.aka);  // Logs "captain america"
  
  // Object destructuring: extracting values directly into variables from the object
  const { name, age, aka } = {
    name: "steve rogers",  // Same name properties for the object
    age: 130,
    aka: "captain america",
  };
  
  // Logging the destructured variables
  console.log(name, age, aka); // Logs "steve rogers 130 captain america"
  
  // Array destructuring: extracting values directly into variables from an array
  const [a, b, c] = [1, 2, 3]; // a gets 1, b gets 2, c gets 3
  
  // Logging the destructured array values
  console.log(a, b, c); // Logs "1 2 3"
  