function incrementCounter(val, callback) {
  setTimeout(() => {
    console.log(val);
    callback();
  }, 1000);
}

//Callback hell: incrementing the counter in nested callbacks
incrementCounter(1, () => {
  incrementCounter(2, () => {
    incrementCounter(3, () => {
      console.log("counting completed");
    });
  });
});
