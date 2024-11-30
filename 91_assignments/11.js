function checkCanIvote(time, age) {
  return new Promise((res, rej) => {
    if (age >= 18) {
      setTimeout(() => {
        res("yes you can vote");
      }, time);
    } else {
      setTimeout(() => {
        rej("you cannot vote");
      }, time);
    }
  });
}

checkCanIvote(1000, 10)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
