const arr = [1,4,"undefined","A","3",null];

arr.sort();

//by default sort does't know how to handle different data types 
//so simply it converts everything into string
//once every thing is string
//sort arranges the element based on their unicode, 
//after sorting by unique code 
//the re-order like this [1, '3', 4, 'A', null, 'undefined']
console.log(arr);
