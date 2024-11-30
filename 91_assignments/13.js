let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let img = document.querySelector('img');
let buttonlist = document.querySelectorAll('button');


const url = 'https://randomuser.me/api/'

const getRandomUser = async()=>{
    const response = await fetch(url);
    const data = await response.json();
    const finalData = data.results[0]
    console.log(finalData);
    const firstName = finalData.name.first;
    const lastName = finalData.name.last;
    let fullName = `${firstName} ${lastName}`
    let picture = finalData.picture.large
    let email = finalData.email;
    let age = finalData.dob.age;
    let phone = finalData.phone;

    return {
        fullName,picture,age,email,phone
    }
}

const display = async()=>{
    let data = await getRandomUser();
    h1.innerHTML = data.fullName;
    img.setAttribute('src',data.picture);
    buttonlist.forEach((btns)=>{
        btns.addEventListener('click',()=>{
            let attr = btns.getAttribute('data-attr');
            h2.innerHTML = '';
            if(attr == 'phone'){
                h2.innerHTML = data.phone;
            }else if(attr == 'email'){
                h2.innerHTML = data.email
            }else if(attr == 'age'){
                h2.innerHTML = data.age;
            }
        })
    })
}

display();