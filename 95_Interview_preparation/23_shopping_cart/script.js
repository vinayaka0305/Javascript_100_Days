const productContainer = document.querySelector(".products");
const cartContainer = document.querySelector(".shopping-cart");
const totalAmount = document.querySelector(".total");

const products = [
  { name: "Product 1", price: 10.0 },
  { name: "Product 2", price: 5.0 },
  { name: "Product 3", price: 20.0 },
  { name: "Product 4", price: 15.0 },
  { name: "Product 5", price: 2.5 },
];

const cart = [];


products.forEach((product)=>{
    const div = document.createElement('div');
    div.className = "product"
    
    const productName = document.createElement('span');
    productName.textContent = product.name;

    const productPrice = document.createElement('span');
    productPrice.textContent = product.price.toFixed(2);

    const button = document.createElement('button');
    button.textContent = "Add to cart";

    div.appendChild(productName)
    div.appendChild(productPrice)
    div.appendChild(button)

    productContainer.appendChild(div);

    button.addEventListener('click',()=>{
        addTocart(product);
    })
})


const addTocart = (product)=>{
    cart.push(product);

    const cartItem = document.createElement('div');
    cartItem.textContent = `$${product.name}-${product.price.toFixed(2)}`;
    cartContainer.appendChild(cartItem)
    const total = cart.reduce((a,b)=>a+b.price,0);
    totalAmount.textContent = total;

}