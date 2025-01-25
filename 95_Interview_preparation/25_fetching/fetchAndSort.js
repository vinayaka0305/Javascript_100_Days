const container = document.querySelector("#container");

const url =
  "https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses";

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const sorted = data.sort((a,b)=>{
        return b.ticketPrice-a.ticketPrice;
    })
    sorted.forEach((obj)=>{
        const div = document.createElement('div');
        div.className = "description";
        div.innerHTML = `
        <p>busName : ${obj.busName}</p>
        <p class="ticket">ticketPrice : ${obj.ticketPrice}</p>`
        container.appendChild(div);
    })
  } catch (error) {
    console.log(error);
  }
};

fetchData();
