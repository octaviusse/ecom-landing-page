'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type CartItem = {
    id: number;
    name: string;
    price: number;
    color: string;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (item: Omit<CartItem, 'id'>) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    total: number;
    isCartOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const addToCart = (item: Omit<CartItem, 'id'>) => {
        const newItem = { ...item, id: Date.now() };
        setCart((prev) => [...prev, newItem]);
        // Show notification logic would go here, or we can expose a notify function
    };

    const removeFromCart = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    if (!mounted) {
        return null; // or loading spinner, prevents hydration mismatch if using local storage
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                total,
                isCartOpen,
                openCart,
                closeCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
