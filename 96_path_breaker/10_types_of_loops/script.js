//Loop helps us to repeat a block of code multiple times,here are the main types of loops in js


//for loop(fixed repetitions)

//Used when you know exactly how many times to repeat something
for(let i=1;i<=5;i++){
    console.log(i)
}
//let i = 1 starts from 1;
//i<=5 runs until i is 5
//i++ increase i by 1 after everyloop


//while loop(repeat until condition in false);
//Used when you don't know how many times to repeat,but there is a condition

let i =1;
while(i<=5){
    console.log(i);
    i++;
}

//Runs as long as the condition(i<=5) true;
//stops when i becomes 6;


//do...while loop(Runs at least once);
//Runs the block at least once, even if the condition is false;

let a = 10;
do{
    console.log("hiii")
    a++;
}while(a<5);

//executes once before checking the condition
//if condition is true,it repeats



//for...of loop(For arrays);
//Used loop over the arrays(gets values directly);

let numbers = [1,2,3,4,5];

for(let num of numbers){
    console.log(num)
}

//gets each value from the array


//for...in Loop(for Objects);
//Used to loop over the objects(gets property names/keys);

let person = {name:"alice",age:29,city:"NY"};

for(let key in person){
    console.log(`${key} : ${person[key]}`)
}
//get each key(property name) in the object
