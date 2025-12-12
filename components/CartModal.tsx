'use client';

import { useCart } from '@/context/CartContext';
import React, { useEffect } from 'react';

const currencyFormatter = new Intl.NumberFormat('fr-DZ', {
    style: 'currency',
    currency: 'DZD',
    minimumFractionDigits: 2,
});

function capitalizeFirst(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function CartModal() {
    const { cart, removeFromCart, clearCart, isCartOpen, closeCart, total } =
        useCart();

    // Handle outside click
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            closeCart();
        }
    };

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isCartOpen]);

    // Checkout handler
    const handleCheckout = () => {
        if (cart.length > 0) {
            alert(
                `Checkout successful! Total: ${currencyFormatter.format(
                    total
                )}\n\nThank you for your purchase!`
            );
            clearCart();
            closeCart();
        }
    };

    if (!isCartOpen) return null;

    return (
        <div className="modal" style={{ display: 'block' }} onClick={handleOverlayClick}>
            <div className="modal-content">
                <span className="close" onClick={closeCart}>
                    &times;
                </span>
                <h2>Shopping Cart</h2>
                <div id="cartItems">
                    {cart.length === 0 ? (
                        <p className="empty-cart">Your cart is empty</p>
                    ) : (
                        cart.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <div className="cart-item-info">
                                    <div className="cart-item-name">{item.name}</div>
                                    <div className="cart-item-color">
                                        Color: {capitalizeFirst(item.color)}
                                    </div>
                                </div>
                                <div className="cart-item-price">
                                    {currencyFormatter.format(item.price)}
                                </div>
                                <button
                                    className="remove-item"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    )}
                </div>
                <div className="cart-total">
                    <span>Total:</span>
                    <span id="cartTotal">{currencyFormatter.format(total)}</span>
                </div>
                <button
                    className="checkout-button"
                    id="checkoutBtn"
                    onClick={handleCheckout}
                    disabled={cart.length === 0}
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}
