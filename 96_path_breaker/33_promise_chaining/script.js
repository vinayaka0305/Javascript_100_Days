//promise chaining means linking multiple .then() calls together,so each one runs after the previous one

//It helps execute asynchronous tasks in order without messy callbacks

function firsTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("task 1 done");
      resolve("data from task 1");
    }, 1000);
  });
}

function secondTask(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("task 2 done with:",data);
      resolve("data from task 2");
    }, 1000);
  });
}

firsTask()
  .then((resutl1) => secondTask(resutl1))
  .then((result2) => {
    console.log("all tasks done", result2);
  });


  //why use promise chaning ?
  //avoid callback hell(messy nested functions);
  //Makes code readable and easy to debug
  //Ensures tasks run in order (first task->second task->third task)