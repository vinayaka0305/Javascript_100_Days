const btn = document.querySelector("#btn");
const display = document.querySelector("#display");

function fetchData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Data received!");
    }, 1000);
  });
}

btn.addEventListener("click", () => {
  fetchData()
    .then((data) => (display.textContent = data))
    .catch((err) => console.log(err));
});
