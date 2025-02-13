const titleContainer = document.querySelector('#title-container');

const url = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`


const fetchData = async()=>{
    const response = await fetch(url);
    const data = await response.json();
    const listData = data;
    listData.forEach((list)=>{
        const li = document.createElement('li')
        li.innerHTML = list.title;
        titleContainer.appendChild(li);
    })
}

fetchData();