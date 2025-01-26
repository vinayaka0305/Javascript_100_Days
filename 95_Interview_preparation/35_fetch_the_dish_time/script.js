const recipeList = document.querySelector("#recipeList");
const recipeReadyInMinutes = document.querySelector("#recipeReadyInMinutes");
const url =
  "https://content.newtonschool.co/v1/pr/64996337e889f331d43f70ba/recipes";

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    data.forEach((obj) => {
      const li = document.createElement("li");
      li.textContent = obj.title;
      recipeList.appendChild(li);
      li.addEventListener("click", () => {
        recipeReadyInMinutes.textContent = `Ready in minutes : ${obj.readyInMinutes}`;
      });
    });
  } catch (error) {
    console.log(error);
  }
};

fetchData();
