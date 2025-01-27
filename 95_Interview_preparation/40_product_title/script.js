const url = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`;

const titleContainer = document.querySelector('#title-container');

const fetchData = async()=>{
    try {
        const response = await fetch(url);
        const data = await response.json();   
        const ul = document.createElement('ul');
        data.forEach((obj)=>{
            const li = document.createElement('li');
            li.textContent = obj.title;
            ul.appendChild(li);
        })
        titleContainer.appendChild(ul);
    } catch (error) {
        console.log(error);
    }
}

fetchData();