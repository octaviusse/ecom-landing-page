// Cart functionality
let cart = [];
let selectedColor = 'black';

// Currency formatter for DZD
const currencyFormatter = new Intl.NumberFormat('fr-DZ', { style: 'currency', currency: 'DZD', minimumFractionDigits: 2 });

// DOM Elements
const addToCartBtn = document.getElementById('addToCartBtn');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeModal = document.getElementById('closeModal');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const colorOptions = document.querySelectorAll('.color-option');

// Color selection
colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        colorOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        selectedColor = option.dataset.color;
        
        // Add visual feedback
        option.style.transform = 'scale(1.2)';
        setTimeout(() => {
            option.style.transform = '';
        }, 200);
    });
});

// Add to cart
addToCartBtn.addEventListener('click', () => {
    // Use the price from the page's data attribute (keeps HTML/JS in sync)
    const currentPriceElem = document.querySelector('.current-price');
    const priceValue = currentPriceElem ? parseFloat(currentPriceElem.dataset.price) : 9000;
    const product = {
        id: Date.now(),
        name: 'SmartWatch Pro',
        price: priceValue,
        color: selectedColor
    };
    
    cart.push(product);
    updateCart();
    showNotification('Added to cart!');
    
    // Button animation
    addToCartBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        addToCartBtn.style.transform = '';
    }, 200);
});

// Update cart display
function updateCart() {
    cartCount.textContent = cart.length;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        checkoutBtn.disabled = true;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-color">Color: ${capitalizeFirst(item.color)}</div>
                </div>
                    <div class="cart-item-price">${currencyFormatter.format(item.price)}</div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `).join('');
        checkoutBtn.disabled = false;
    }
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = currencyFormatter.format(total);
}

// Remove from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
    showNotification('Item removed from cart');
}

// Show/hide cart modal
cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Checkout
checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        alert(`Checkout successful! Total: ${currencyFormatter.format(total)}\n\nThank you for your purchase!`);
        cart = [];
        updateCart();
        cartModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Format the prices displayed on the page to the current currency format
function formatPagePrices() {
    const origElem = document.querySelector('.original-price');
    const currentElem = document.querySelector('.current-price');
    if (origElem && origElem.dataset.price) {
        const val = parseFloat(origElem.dataset.price);
        origElem.textContent = currencyFormatter.format(val);
    }
    if (currentElem && currentElem.dataset.price) {
        const val = parseFloat(currentElem.dataset.price);
        currentElem.textContent = currencyFormatter.format(val);
    }
}

formatPagePrices();
// Ensure cart totals and counters are consistent on load
updateCart();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Utility function
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Add CSS for notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Watch screen time update
function updateWatchTime() {
    const timeElement = document.querySelector('.time');
    if (timeElement) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}`;
    }
}

// Update time every minute
updateWatchTime();
setInterval(updateWatchTime, 60000);

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and review cards
document.querySelectorAll('.feature-card, .review-card, .spec-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

console.log('SmartWatch Pro Landing Page Loaded Successfully! 🎉');
