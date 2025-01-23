const dataDisplay = document.querySelector("#display");

const BUSES_API =
  "https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses";
const TRAIN_API =
  "https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains";

const fetchData = async () => {
  try {
    const response = await fetch(BUSES_API);
    const data = await response.json();
    // console.log(data[0]);
    if (data.length > 0) {
      const busData = data[0];
      dataDisplay.innerHTML = `<div>
        <h2>BussName: ${busData.busName}</h2>
    </di>`;
    } else {
      dataDisplay.innerHTML = "No data";
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const response = await fetch(TRAIN_API);
      const data = await response.json();
      //   console.log(data[0]);
      if (data.length > 0) {
        const train = data[0];
        dataDisplay.innerHTML = `<div>
          <h2>TrainNumber: ${train.train_number}</h2>
      </di>`;
      } else {
        dataDisplay.innerHTML = "No train data";
      }
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
