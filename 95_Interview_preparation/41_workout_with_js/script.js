const inputWorkout = document.querySelector("#input-workout");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

const personalTrainer = {
  name: "vinayaka",
  workout: ["pushups", "situps", "squats"],
  startWorkOut: function (val) {
    let res = this.workout.includes(val.toLowerCase());
    if (res) {
      output.textContent = `vinayak is starting ${val}`;
    } else {
      output.textContent = `vinayak does't know the ${val} workout`;
    }
  },
};

btn.addEventListener("click", () => {
  let workoutVal = inputWorkout.value;
  personalTrainer.startWorkOut(workoutVal);
});
