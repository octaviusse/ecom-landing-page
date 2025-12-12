'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const { cart, openCart } = useCart();
    const [scrolled, setScrolled] = useState(false);
    const [animateCart, setAnimateCart] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Animate cart icon when cart length changes
    useEffect(() => {
        if (cart.length > 0) {
            setAnimateCart(true);
            const timer = setTimeout(() => setAnimateCart(false), 400);
            return () => clearTimeout(timer);
        }
    }, [cart.length]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="logo">SmartWatch Pro</div>
                <ul className="nav-links">
                    <li>
                        <Link href="#features">Features</Link>
                    </li>
                    <li>
                        <Link href="#specs">Specs</Link>
                    </li>
                    <li>
                        <Link href="#reviews">Reviews</Link>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={`cart-icon ${animateCart ? 'animate-pop' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                openCart();
                            }}
                            id="cartBtn"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path d="M9 2L7 8H21L19 2H9Z" strokeWidth="2" />
                                <path d="M7 8L5 22H19L21 8" strokeWidth="2" />
                            </svg>
                            <span className="cart-count" id="cartCount">
                                {cart.length}
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
