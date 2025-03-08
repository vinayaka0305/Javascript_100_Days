//In JS asynchronous operations like(fetching data from a server,reading files, or waiting for timer) can be handled in three main ways

//1.Callbacks (old way);

//A callback is a function passed into another function to run later
//It helps handle tasks that take time, like fetching data
//Problem? It can get messy with too many nested callbacks("callback hell");

function fetchData(cb) {
  setTimeout(() => {
    console.log("Data fetched");
    cb();
  }, 1000);
}

fetchData(() => {
  console.log("process finished with callbacks");
});

////////////////////////////////////////////////////////////////////////

//2. Promises (Better Way)
//A promise represents a task that will be completed in future

//It has 3 states:
//Pending(waiting)
//Resolved(successful)
//Rejectd(failed)

//uses .then() for success and .catch() for errors

function fetchData1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Data fetched with promises");
    }, 1000);
  });
}

fetchData1()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//////////////////////////////////////////////////////////////////////

//3.Async/Await (Best way):

// A cleaner way to handle promises
// Use async before function and awain inside it.
// Makes code look sychronous(step-by-step execution)

function fetchData12() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Data fetched with async/await");
    }, 1000);
  });
}

const getData = async () => {
  try {
    let data = await fetchData12();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getData();

// ✅ Which one should you use?

// Use async/await because it's easier to read and write.
// Use Promises when handling multiple tasks.
// Avoid callbacks if possible (to prevent "callback hell").
