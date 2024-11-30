const arr =[1,2,3];
arr[0] = 0;
console.log(arr);// [0, 2, 3]

//with const we have changed the 0th index of the array
//how means?
//whenever we declare an arr 
//memory for an arr gets allocated at callstack but the actual data gets stored in the heap memory
//the arr in call stack holds the reference of the data and hence we are able to change the values of the arr and same case for objects also
//so arrays and objects are mutable with const keyword