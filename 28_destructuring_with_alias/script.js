const player1 = {
  name: "virat",
  team: "rcb",
};
// Declare the 'player1' object with properties 'name' and 'team'.

const player2 = {
  name: "rohit",
  team: "mi",
};
// Declare the 'player2' object with properties 'name' and 'team'.

// const { name, team } = player1;
// Destructure 'name' and 'team' from 'player1' object into constants 'name' and 'team'.

// Error happens here if you try to destructure again:
// const { name, team } = player2;
// Trying to destructure the 'name' and 'team' from 'player2' into the same variables 'name' and 'team'.
// This results in an error because you are using 'const', and variables declared with 'const' cannot be redeclared in the same scope.

// The error occurs because you're trying to redeclare the variables name and team using destructuring, and JavaScript doesn't allow the same variable to be declared twice in the same scope with const. Here's your code with an explanation and comments:

// tofix this

// If you need to destructure both objects without errors, you can use different variable names, or avoid redeclaration by using let or renaming the variables:

const { name: name1, team: team1 } = player1;
const { name, team } = player2;

console.log("player1", name1, team1);
console.log("player2", name, team);

//this is called alicing renaming our variable name or key name while destructuring an object
