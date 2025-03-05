//let
//Can reassign : Yes
//Can redeclare in the same scope: No
//Must be intialized at declartion: No
//Hoisted? : Yes(but in TDZ)
//Scope: Block Scope

let age = 20;
age = 24;

console.log(age);

const username = "Alice";
// username = "bob";
console.log(username);

let x;
x = 10; //allowed

// const y;
// y = 10;//not allowed

//Scope is same in both for let and const

if (true) {
  let a = 10;
  const b = 20;
}

//console.log(a);❌ Error! `a` is not accessible outside the block
//console.log(b);❌ Error! `b` is not accessible outside the block

//when to use what?
//Use const when the value should never change (e,g... PI = 3.14);
//Use let when you need a variable that can change(e,g... let score = 0);
