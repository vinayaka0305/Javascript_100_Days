const amountsList = document.querySelectorAll('[data-ns-test="price"]');
const grandTotal = document.querySelector('[data-ns-test="total"]')


let total = 0;
amountsList.forEach((amt)=>{
    total += Number(amt.innerHTML);
})

if(total){
    grandTotal.innerHTML = total;
}

console.log(total);