const products = [

{
    id:1,
    name:"Laptop",
    price:55000,
    image:"images/laptop.png",
},

{
    id:2,
    name:"Smartphone",
    price:20000,
    image:"images/phone.png",
},

{
    id:3,
    name:"Headphones",
    price:2500,
    image:"images/headphone.png",
},

{
    id:4,
    name:"Smart Watch",
    price:4999,
    image:"images/watch.png",
},

{
    id:5,
    name:"Keyboard",
    price:1200,
    image:"images/keyboard.png",
},

{
    id:6,
    name:"Mouse",
    price:800,
    image:"images/mouse.png",
}

];

function displayProducts(productList){

    const container =
    document.getElementById(
    "productContainer"
    );

    container.innerHTML = "";

    productList.forEach(product => {

        container.innerHTML += `

        <div class="product-card">

            <img
            src="${product.image}"
            alt="${product.name}">

            <h3>${product.name}</h3>

            <p>₹${product.price}</p>

            <button
            onclick="addToCart(${product.id})">
            Add To Cart
            </button>

        </div>

        `;

    });

}

function addToCart(id){

    const product =
    products.find(
    p => p.id === id
    );

    let cart =
    JSON.parse(
    localStorage.getItem("cart")
    ) || [];

    cart.push(product);

    localStorage.setItem(
    "cart",
    JSON.stringify(cart)
    );

    alert(
    product.name +
    " added to cart"
    );
}

function searchProducts(){

    const searchValue =
    document
    .getElementById(
    "searchInput"
    )
    .value
    .toLowerCase();

    const filteredProducts =
    products.filter(product =>
        product.name
        .toLowerCase()
        .includes(searchValue)
    );

    displayProducts(
    filteredProducts
    );
}

displayProducts(products);