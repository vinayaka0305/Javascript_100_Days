const numbers = [1,2,3,4,5];

// slice(start, end) extracts elements from start index up to (but not including) end index.

let sliced = numbers.slice(1,3);
// Get elements from index 1 to 3 (excluding index 3)

console.log(sliced,"modified arr");
console.log(numbers,"original arr");//unchage



// 2 splice() → Removes/Adds Elements (Modifies Original Array)

// splice(start, deleteCount, item1, item2, ...)
// Removes deleteCount elements from start index.
// Optionally adds new elements at start index.


const newNumbers = [10,20,30,40,50];

const spliced = newNumbers.splice(0,2);

console.log(spliced,"modified"); //[10, 20] 'modified'
console.log(newNumbers,"original");//[30, 40, 50] 'original'


const colors = ["red","green","blue"];
// Insert "yellow" & "purple" at index 1
colors.splice(1,0,"yellow","purple");

console.log(colors)//// ["red", "yellow", "purple", "green", "blue"]


