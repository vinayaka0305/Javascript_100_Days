const btns = document.querySelectorAll('button');
const preview = document.querySelector('.preview')
const body = document.querySelector('body');
const keyboard = document.querySelector('.keyboard');

let inputText = '';


btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(btn.textContent == 'space'){
            inputText += ' '
        }else{
           inputText += btn.textContent
        }
        preview.textContent = inputText;
        if(inputText == "one"){
            // console.log(inputText)
            intial()
        }else{
            let quote = document.querySelector('.quote');
            if(quote){
                quote.remove();
                keyboard.classList.remove('hidden');
            }
        }
    })
})

const intial =async()=>{
    try {
        const response = await fetch('https://quotes-api-self.vercel.app/quote');
        const data = await response.json();
        console.log(data);
        const div = document.createElement("div");
        div.innerHTML = data.quote;
        preview.textContent = ''
        inputText = ''
        div.setAttribute('class','quote')
        preview.appendChild(div)
        keyboard.classList.add('hidden')
    } catch (error) {
        console.log(error)
    }
}