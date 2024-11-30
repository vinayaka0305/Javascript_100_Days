function promiseMe(time, data) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data);
    }, time);
  });
}

promiseMe(1000, "i love you").then((data) => console.log(data));
