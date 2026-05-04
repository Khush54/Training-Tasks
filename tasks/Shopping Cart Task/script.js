// 1. Data Definitions
const products = [
    { id: 1, name: "Headphones", price: 150 },
    { id: 2, name: "Mobile Phone", price: 800 },
    { id: 3, name: "Laptop Pro", price: 1500 },
    { id: 4, name: "Smart Watch", price: 250 },
    { id: 5, name: "Gaming PC", price: 2200 },
    { id: 6, name: "USB Mouse", price: 25 }
];

let cart = [];
let searchQuery = "";

// 2. Initialize the App Structure
const app = document.getElementById('app');

function initLayout() {
    app.innerHTML = `
        <div class="header">
            <h1>TechStore</h1>
            <input type="text" id="searchBar" placeholder="Search products..." oninput="handleSearch(event)">
        </div>
        <div id="productDisplay" class="product-grid"></div>
        <div class="cart-section">
            <h2>Your Shopping Cart</h2>
            <div id="cartItems"></div>
            <div id="cartTotals" class="totals"></div>
        </div>
    `;
    renderProducts();
    renderCart();
}

// 3. Render Products with Search Filter
function renderProducts() {
    const display = document.getElementById('productDisplay');
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    display.innerHTML = filtered.map(product => {
        // Condition for expensive items (Price > 1000)
        const isExpensive = product.price > 1000 ? 'expensive' : '';
        
        return `
            <div class="product-card ${isExpensive}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    }).join('');
}

// 4. Cart Logic Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    renderCart();
}

function updateQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            renderCart();
        }
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
}

function handleSearch(event) {
    searchQuery = event.target.value;
    renderProducts();
}

// 5. Calculations and Rendering Cart
function calculateTotal() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return { totalItems, totalPrice };
}

function renderCart() {
    const cartContainer = document.getElementById('cartItems');
    const totalsContainer = document.getElementById('cartTotals');

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        totalsContainer.innerHTML = "";
        return;
    }

    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div>
                <strong>${item.name}</strong> - $${item.price} 
            </div>
            <div>
                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>Qty: ${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <span>Subtotal: $${item.price * item.quantity}</span>
                <span class="remove-btn" onclick="removeFromCart(${item.id})">Remove</span>
            </div>
        </div>
    `).join('');

    const totals = calculateTotal();
    totalsContainer.innerHTML = `
        <p>Total Items: <strong>${totals.totalItems}</strong></p>
        <p>Grand Total: <strong>$${totals.totalPrice}</strong></p>
    `;
}

// Start the app
initLayout();