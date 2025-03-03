const btns = document.querySelectorAll("button");
const display = document.querySelector(".preview");
const body = document.querySelector("body");
const keyboard = document.querySelector(".keyboard");

let inputText = "";

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent == "space") {
      inputText += " ";
    } else {
      inputText += btn.textContent;
    }
    display.textContent = inputText;
    if (inputText == "one") {
      fetchData();
    } else {
      let quote = document.querySelector(".quote");
      if (quote) {
        quote.remove();
        keyboard.classList.remove("hidden");
      }
    }
  });
});

const fetchData=async()=>{
  try {
    const response = await fetch(`https://quotes-api-self.vercel.app/quote`)
    const data= await response.json();
    const div = document.createElement('div');
    div.textContent = data.quote
    display.textContent = '';
    div.setAttribute('class','quote')
    display.appendChild(div);
    keyboard.classList.add("hidden");
  } catch (error) {
    console.log(error);
  }
}