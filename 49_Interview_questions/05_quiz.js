// Loop from 0 to 5, inclusive
for (var start = 0; start <= 5; start++) {
    // Use setTimeout to schedule a function to be executed after a delay (in this case, no specific delay is set)
    setTimeout(() => {
        // This will log the value of 'start' to the console
        console.log(start);
    });
}

// After the loop, due to the nature of 'var', 'start' will be 6 when the timeout functions execute

// Easy Breakdown:
// Loop:

// The loop starts with start at 0 and counts up to 5. So, it goes through the numbers 0, 1, 2, 3, 4, and 5.

// setTimeout:

// Inside the loop, setTimeout is used. This means, "Hey, wait a moment before running this code."
// The code inside setTimeout will run after the loop has finished, not right away.
// Logging start:

// The code console.log(start) is supposed to print the current value of start.
// However, since we used var, all the setTimeout functions refer to the same start variable. By the time they run (after the loop is done), start has already increased to 6.


// This happens because all the timers print the final value of start, which is 6, after the loop has finished running.

// Start a loop that goes from 0 to 5
// for (let start = 0; start <= 5; start++) {
//     // Set up a timer to run the following code after a little delay
//     setTimeout(() => {
//         // This will print the value of 'start' to the console
//         console.log(start); // Now, this will print 0, 1, 2, 3, 4, and 5
//     });
// }

// This works because let creates a new version of start for each loop, so each timer knows what the value was when it was created.