const cartList = document.querySelector("#cartList");
const totalPrice = document.querySelector("#totalPrice");
const cartBtns = document.querySelectorAll(".addToCart");

const priceArr = [];

cartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log('hi')
    let price = Number(btn.getAttribute("data-price"));
    // console.log(price);
    priceArr.push(price);
    let sum = priceArr.reduce((a, b) => a + b, 0);
    totalPrice.textContent = `$${sum}`;
  });
});
