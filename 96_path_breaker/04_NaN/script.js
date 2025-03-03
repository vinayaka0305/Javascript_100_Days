//NaN stands for not a number, it means the result of operation is not a valid number

//Examples

//trying to do math with something that is not a number

console.log("hello"-5);


//Dividing 0/0

console.log(0/0);


//trying to convert invalid string into number

console.log(Number('abc'));

//Math operation does't make sense;

console.log(Math.sqrt(-1));


//NaN is still considered as number in js

console.log(typeof NaN);

//NaN is not equal to itself
//since every NaN represents an unknown value, js treats them as different from
//each other 
console.log(NaN !== NaN);

//To check NaN use isNaN();


console.log(isNaN("hi"-5))//true;
