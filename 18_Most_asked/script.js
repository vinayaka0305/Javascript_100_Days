const nums = [1,2,3,4,5];

// for(var i=0; i < nums.length; i++) {
//     setTimeout(() => {
//         // The `i` is being used inside an asynchronous callback, 
//         // and since `var` has function scope, the value of `i` 
//         // will be the same for all iterations after the loop ends. 
//         // By the time the callback executes, `i` has already been 
//         // incremented beyond the last index (to nums.length), 
//         // which is `5`. Since there is no `nums[5]`, 
//         // it prints `undefined`.
//         console.log(nums[i]);
//     }, 1000);
// }


// The reason the code prints undefined five times rather than just once is due to how the setTimeout function and the for loop work in JavaScript, combined with the scoping behavior of var.

// Here’s a detailed explanation:

// var and Function Scope:

// When you declare i with var, it has function scope, not block scope. This means that the variable i is shared across all iterations of the loop.
// During the loop, the setTimeout function creates a callback (which will be executed after 1000 milliseconds), but it doesn’t execute the callback immediately. Instead, it registers the callback to run later.
// When the Callbacks are Executed:

// By the time the setTimeout callbacks are executed (after 1000 milliseconds), the for loop has already completed, and i has been incremented to 5 (which is nums.length).
// Since the loop has already finished, all the setTimeout callbacks now reference the same final value of i, which is 5.
// nums[i] is undefined:

// The array nums only has valid indices from 0 to 4. When the callbacks try to access nums[5], it returns undefined since nums[5] doesn’t exist.
// Since there are 5 iterations in the loop, 5 setTimeout callbacks are registered, each trying to log nums[i] where i is now 5. This results in five undefined outputs.
// Therefore, all five callbacks print undefined because, by the time they execute, i has already become 5.


for(let i=0; i < nums.length; i++) {
    setTimeout(() => {
        // Now, with 'let', 'i' is block-scoped, so each iteration gets 
        // its own copy of 'i', preserving the correct value inside 
        // the callback.
        console.log(nums[i]);
    }, 1000);
}