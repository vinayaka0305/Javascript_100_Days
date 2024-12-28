const productContainer = document.querySelector('.products');
const shoppingCart = document.querySelector(".shopping-cart");
const totalDisplay = document.querySelector("#total");

const products = [
  { name: "Product 1", price: 10.0 },
  { name: "Product 2", price: 5.0 },
  { name: "Product 3", price: 20.0 },
  { name: "Product 4", price: 15.0 },
  { name: "Product 5", price: 2.5 },
];

const cart = [];

products.forEach((product,index)=>{
    const div = document.createElement('div');
    div.className = "product"

    const productName = document.createElement('span');
    productName.className = "product-name"
    productName.textContent = product.name

    const productPrice = document.createElement('span');
    productPrice.className = "product-price"
    productPrice.textContent = `-$${product.price.toFixed(2)}`;

    const button = document.createElement('button');
    button.className = 'add-to-cart'
    button.textContent = "Add to cart"

    button.addEventListener('click',()=>{
        addTocart(product)
    })

    div.appendChild(productName)
    div.appendChild(productPrice)
    div.appendChild(button)

    productContainer.appendChild(div);
})

function addTocart(product){
    console.log(product);
    cart.push(product);

    const cartItem = document.createElement('div');
    cartItem.textContent = `${product.name} - ${product.price.toFixed(2)}`
    shoppingCart.appendChild(cartItem)
    console.log(cart);
    const total = cart.reduce((sum,item)=>sum+item.price,0);
    // console.log(total)
    totalDisplay.textContent = total.toFixed(2);
}

