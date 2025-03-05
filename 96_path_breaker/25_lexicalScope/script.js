//lexical scope means that a function can access variables from its outerscope where it was defined,not where it is called

function outer() {
  let uName = "John";
  return function inner() {
    console.log(uName);
  };
}

const result = outer();
result();

//how it works?

//inner() fn is inside outer()
//It access uName, even though uName is not inside inner();
//This is because of lexical scope->inner() can "see" variables in outer();

//Lexical scope in Nested Functions

function first() {
  let x = 10;
  function second() {
    let y = 20;
    function third() {
      let z = 30;
      console.log(x, y, z);//Can access x, y, and z
    }
    third();
  }
  second();
}

first();


//Example

function myOuter(){
  let message = "Hello";
  return function myInner(){
    console.log(message);
  }
}

const myFnc = myOuter();//returs a "myInner" function
myFnc();//still print "Hello" because "message" is in its lexical scope

//Even though myfnc is call outside myOuter(),it still remembers the message because of lexicalscope

