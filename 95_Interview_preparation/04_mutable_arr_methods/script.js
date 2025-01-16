//1. push()

//adds one more elements to the the end of the array
//mutates : adds element directly to the original array
// let arr = [1,2];

// arr.push(3,4);

// console.log(arr);// [1, 2, 3, 4]


//2. pop()

// let arr = [1,2,3];
// //removes the last element from the arr and return it
// //mutates : changes the length of the array
// arr.pop();
// console.log(arr);

//3. shift

// let arr = [1,2,3,4];
//removes the first element from the arr and return it
//mutates : changes the length of the array
// arr.shift();
// console.log(arr);


//4. unshift()

// let arr = [2,3,4];
// //Adds one more element to the beginning of the array
// //mutates : adds elememts to the original array
// arr.unshift(1);
// console.log(arr);


//5.splice()

// let arr = [1,2,3];
// // Adds,removes,or replaces elements in array
// // mutates : modifys the array directly
// arr.splice(1,1,4,5);// removes 1 element at index 1 and adds 4,5 
// console.log(arr);// [1, 4, 5, 3]


//6.sort()

//sorts the elements of an array in place
//mutates: rearranges the original array

// let arr = [2,1,3];

// arr.sort();

// console.log(arr);

//7.reverse();

//reverse the element of the array in place;

//mutates :modifies the order of the original array
// let arr = [1,2,3];
// arr.reverse();
// console.log(arr);// [3, 2, 1]

//8.fill();

//fills all or part of an array with static value;
//mutates: overwrites elements in the original array

// let arr = [1,2,3];
// arr.fill(0);
// console.log(arr);// [0, 0, 0]


//9.copyWithin();

//copies the part of an array to another location within the same array
//mutates : overwrites elements in the original array

// let arr = [1,2,3,4];
// arr.copyWithin(1,2);
// console.log(arr);// [1, 3, 4, 4]


//Key Characteristics of Mutable Methods
// Directly modify the original array.
// Often used when you need to alter the existing array in place.

// Non-Mutable (Immutable) Array Methods
// For comparison, methods like map(), filter(), concat(), and slice() do not mutate the original array—they return a new array instead.



