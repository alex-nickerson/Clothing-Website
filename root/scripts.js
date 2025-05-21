let cart = [];

const products = [
    { id: 2737, name: "Red Shirt", price: 29.99, image: "images/2737.jpg" },
    { id: 3819, name: "Pink Apron", price: 59.99, image: "images/3819.jpg" },
    { id: 4186, name: "Blue Tank Top", price: 39.99, image: "images/4186.jpg" },
    { id: 4187, name: "Red Tank Top", price: 39.99, image: "images/4187.jpg" },
    { id: 4193, name: "Pink Winnie The Pooh Top", price: 29.99, image: "images/4193.jpg" },
    { id: 8385, name: "Orange Shirt", price: 29.99, image: "images/8385.jpg" },
    { id: 8420, name: "Pink Car Shirt", price: 29.99, image: "images/8420.jpg" },
    { id: 13341, name: "Dark Maroon Jean Shorts", price: 34.99, image: "images/13341.jpg" },
    { id: 27225, name: "Floral Blouse", price: 44.99, image: "images/27225.jpg" },
    { id: 31123, name: "White Flower Shirt", price: 29.99, image: "images/31123.jpg" },
    { id: 34106, name: "White Tank Top", price: 39.99, image: "images/34106.jpg" },
    { id: 34107, name: "Pink Tank Top", price: 39.99, image: "images/34107.jpg" },
    { id: 34112, name: "Blank And White Baby Shirt", price: 14.99, image: "images/34112.jpg" },
    { id: 34113, name: "Pink Blouse", price: 89.99, image: "images/34113.jpg" },
    { id: 35437, name: "Black Jean Shorts", price: 34.99, image: "images/35437.jpg" },
    { id: 37585, name: "White Baby Shirt", price: 14.99, image: "images/37585.jpg" },
    { id: 37630, name: "Pink Baby Shirt", price: 14.99, image: "images/37630.jpg" },
    { id: 38502, name: "Dark Blue Jean Shorts", price: 34.99, image: "images/38502.jpg" },
    { id: 38503, name: "Light Blue Jean Shorts", price: 34.99, image: "images/38503.jpg" },
    { id: 38932, name: "Pink Leggings", price: 69.99, image: "images/38932.jpg" }
];

document.addEventListener("DOMContentLoaded", function () {
    let productDiv = document.getElementById("products");
    products.forEach((product) => {
        productDiv.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
});

function addToCart(id) {
    let product = products.find((p) => p.id === id);
    cart.push(product);
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
    cart.forEach((item, index) => {
        cartList.innerHTML += `<li>${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button></li>`;
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    alert("Proceeding to checkout...");
}
