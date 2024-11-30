// The call method is used to invoke a function and explicitly set the value of this inside that function. Normally, this refers to the object the function is called on, but with call, you can pass a different object as this.

// For example:

// Without call, this refers to the original object.
// With call, you can change this to another object when calling the function.
// It's like borrowing a function from one object and using it with another object.

const cricketer = {
  firstName: "MS",
  lastName: "Dhoni",
  fullName: function () {
    return `${this.firstName} _ ${this.lastName}`;
  },
};

const shana = {
  firstName: "Rohit",
  lastName: "Sharma",
};
const cheeku = {
  firstName: "Virat",
  lastName: "Kohli",
};

console.log(cricketer.fullName());
//our this keyword is going to refer to cricketer scope
console.log(cricketer.fullName.call(shana));
//but when we call a function defination using call method and pass our shana object
//it's going to refer shana object
console.log(cricketer.fullName.call(cheeku));

// Using 'call', we pass 'cheek' object as 'this', so now 'this' refers to 'cheeku', output: "Virat_Kohli"
