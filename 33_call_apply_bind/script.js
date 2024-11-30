//in javascript call,apply and bind are the methods used to borrow a functions
//and control the value of this(which refers to the current context of a function)

//1.call()
const person = {
  name: "Tony",
  greet: function (aka,age) {
    console.log(`hi,my name is ${this.name} also know as ${aka} and ${age} years old`);
  },
};

person.greet("iron-man",44);

const anotherPerson = { name: "steve" };

// Using call to borrow the greet method
person.greet.call(anotherPerson, "cap",100);

// here call is used to borrow greet() from person and apply it to anotherPerson

////////////////////////////////////////////////////////////////////////////////////

//2.apply

const person1 = {
  name: "John",
  greet: function (age, profession) {
    console.log(`my name is ${this.name} ${age} years old and a ${profession}`);
  },
};

person1.greet(45, "doctor");

const anotherPerson1 = { name: "stark" };

// Using apply to pass arguments as an array
person1.greet.apply(anotherPerson1, [30, "saving world"]);

//works similar to call(), but instead of passing arguments one by one, you can pass them as an array
//When to use it: When you want to invoke a function and pass arguments as an array.

////////////////////////////////////////////////////////////////////////////////////


//3.bind();


const person2={
    name:"banner",
    greet:function(){
        console.log(`my name is ${this.name}`)
    }
}

person2.greet()
const anotherPerson2 = {name:"peter-parker"}

// Using bind to create a new function
const greetPeter = person2.greet.bind(anotherPerson2);
greetPeter();

//return a new function where this permanently set to a specific value;
//unlike call and apply , bind does not immeadiately invoke the function
//it return a new function that can call later

//when you want to create a new function with specific this value that can be 
//called later 

//summary:
// call(): Immediately invokes the function with a new this value, passing arguments one by one.

// apply(): Immediately invokes the function with a new this value, passing arguments as an array.

// bind(): Returns a new function with a set this value that you can call later.