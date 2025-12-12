'use client';

import { useCart } from '@/context/CartContext';
import { useState, useEffect } from 'react';

const currencyFormatter = new Intl.NumberFormat('fr-DZ', {
    style: 'currency',
    currency: 'DZD',
    minimumFractionDigits: 2,
});

const colors = [
    { name: 'black', hex: '#1a1a1a' },
    { name: 'silver', hex: '#c0c0c0' },
    { name: 'blue', hex: '#0066cc' },
    { name: 'rose', hex: '#e6a8a8' },
];

export default function Hero() {
    const { addToCart } = useCart();
    const [selectedColor, setSelectedColor] = useState('black');
    const [time, setTime] = useState('10:30');
    const [notification, setNotification] = useState<string | null>(null);

    useEffect(() => {
        // Clock logic
        const updateTime = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            setTime(`${hours}:${minutes}`);
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    const handleAddToCart = () => {
        addToCart({
            name: 'SmartWatch Pro',
            price: 9000,
            color: selectedColor,
        });
        showNotification('Added to cart!');
    };

    const showNotification = (msg: string) => {
        setNotification(msg);
        setTimeout(() => setNotification(null), 3000);
    };

    return (
        <section className="hero">
            <div className="container">
                {/* Notification Overlay */}
                {notification && (
                    <div
                        style={{
                            position: 'fixed',
                            top: '100px',
                            right: '20px',
                            background: '#4CAF50',
                            color: 'white',
                            padding: '1rem 2rem',
                            borderRadius: '5px',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            zIndex: 3000,
                            animation: 'slideIn 0.3s ease',
                        }}
                    >
                        {notification}
                    </div>
                )}
                <div className="hero-content">
                    <h1 className="hero-title">SmartWatch Pro</h1>
                    <p className="hero-subtitle">
                        The ultimate companion for your active lifestyle
                    </p>
                    <div className="hero-features">
                        <span>💓 Heart Rate Monitor</span>
                        <span>🏃 Activity Tracking</span>
                        <span>💧 Water Resistant</span>
                        <span>🔋 7-Day Battery</span>
                    </div>
                    <div className="price-section">
                        <span className="original-price" data-price="11000">
                            {currencyFormatter.format(11000)}
                        </span>
                        <span className="current-price" data-price="9000">
                            {currencyFormatter.format(9000)}
                        </span>
                        <span className="discount-badge">18% OFF</span>
                    </div>
                    <div className="color-selector">
                        <span className="color-label">Color:</span>
                        {colors.map((c) => (
                            <button
                                key={c.name}
                                className={`color-option ${selectedColor === c.name ? 'active' : ''
                                    }`}
                                data-color={c.name}
                                style={{ background: c.hex }}
                                onClick={() => setSelectedColor(c.name)}
                                aria-label={`Select ${c.name} color`}
                            ></button>
                        ))}
                    </div>
                    <button
                        className="cta-button"
                        id="addToCartBtn"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
                <div className="hero-image">
                    <div className="watch-display">
                        <div className="watch-frame">
                            <div className="watch-screen">
                                <div className="time">{time}</div>
                                <div className="stats">
                                    <div>💓 72 BPM</div>
                                    <div>🏃 8,542 steps</div>
                                </div>
                            </div>
                        </div>
                        <div className="watch-strap"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
