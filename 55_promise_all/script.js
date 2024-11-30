const promise1 = fetch("https://api.thedogapi.com/v1/breeds");
const promise2 = fetch("https://api.thecatapi.com/v1/breeds");
const promise3 = fetch("https://api.adviceslip.com/advice");

//promise.all method // iterable

Promise.all([promise1, promise2, promise3])
  .then((result) =>
    // console.log("all data fetched", result);
    Promise.all(result.map((response) => response.json()))
  )
  .then(([dogData, catData, adviceData]) => {
    const dogContainer = document.querySelector("#dog");

    dogData.forEach((dog) => {
      const li = document.createElement("li");
      li.textContent = dog.name;
      dogContainer.appendChild(li);
    });
    console.log("dog data", dogData);
    console.log("cat data", catData);
    console.log("advice", adviceData);
  })
  .catch((err) => {
    console.log("error", err);
  });
