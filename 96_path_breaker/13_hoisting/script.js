//Hoisting means moving the variables and function declartions to the top of their scope before code runs

console.log(a);

var a = "john"
console.log(a);

//here even a is declared after the first console log, js hoists the declarations to the top
//But only declaration var a not the value, so first log prints undefined instead of error


//Hoisting with let and const (No hoisting behaviour);

// console.log(age);
let age = 10;
console.log(age)


//Hoisting with functions 

sayHello();
function sayHello(){
    console.log('hello')
}

//function declarations are fully hoisted, so you can call them before they defined

//Key Takeaways

//var is hoisted but intialized with undefined
//let and const are also hoisted but stay in TDZ until intialized
//Functions declarations are hoisted completely(Can be called before definition)