// Get Cart Data
let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

// Display Cart Items
function displayCart() {

    const container =
    document.getElementById(
        "cartContainer"
    );

    const totalElement =
    document.getElementById(
        "totalPrice"
    );

    const checkoutBtn =
    document.getElementById(
        "checkoutBtn"
    );

    let total = 0;

    if (!container) return;

    if (cart.length === 0) {

        container.innerHTML = `
            <div class="product-card">
                <h3>Your Cart is Empty</h3>
                <p>Add some products to continue shopping.</p>
            </div>
        `;

        if (totalElement) {
            totalElement.innerText =
            "Total: ₹0";
        }

        if (checkoutBtn) {
            checkoutBtn.style.display =
            "none";
        }

        return;
    }

    container.innerHTML = "";

    cart.forEach((item, index) => {

        total += item.price;

        container.innerHTML += `
            <div class="product-card">

                <img
                    src="${item.image}"
                    alt="${item.name}">

                <h3>${item.name}</h3>

                <p>Price: ₹${item.price}</p>

                <button
                    onclick="removeItem(${index})">
                    Remove
                </button>

            </div>
        `;
    });

    if (totalElement) {
        totalElement.innerText =
        "Total: ₹" + total;
    }

    if (checkoutBtn) {
        checkoutBtn.style.display =
        "inline-block";
    }
}

// Remove Item
function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}

// Clear Cart
function clearCart() {

    localStorage.removeItem("cart");

    cart = [];

    displayCart();

    alert("Cart Cleared Successfully");
}

// Get Total Price
function getTotalPrice() {

    let total = 0;

    cart.forEach(item => {
        total += item.price;
    });

    return total;
}

// Cart Count
function getCartCount() {
    return cart.length;
}

// Initialize
document.addEventListener(
    "DOMContentLoaded",
    function () {
        displayCart();
    }
);