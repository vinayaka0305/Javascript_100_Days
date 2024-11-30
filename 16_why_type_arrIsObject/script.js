//why type of array is object?

class Dummy{

}

const dummInstance = new DOMException();
//whenever we declare a dummInstance of our class the type of that dummy instance is object
console.log( typeof dummInstance)

//whenever we declare a class it creates an object

//Example;

//here we are going to store a values in array using array class

const numbersArray = new Array(1,2,3,4,5); 
console.log(numbersArray)
console.log(typeof [1,2,3]);

//here also same whenever we create class it always creates an object and hence its type is always object
//but whenever we create an array using [] square barckets it's type is also object this is because 
//[1,2,3,4,5] this shorthand method for new Array(1,2,3,4,5); 
//hence type of arr is object

