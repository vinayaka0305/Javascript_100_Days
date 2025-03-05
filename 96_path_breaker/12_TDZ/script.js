
//The Temporal Dead Zone is the time between when a variable is declared and when it is assigned
//During this time if you try to access the variable, you get an reference error
console.log(myVar);

let myVar = 10;


//TDZ is happens with let and const, not with var;

//A variable is in TDZ from the start of its scope(inside a block {}) until it is assigned a value
//Trying to access a variable in TDZ gives a reference error

