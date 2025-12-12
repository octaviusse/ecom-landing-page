import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2025 SmartWatch Pro. All rights reserved.</p>
                <div className="footer-links">
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Terms of Service</Link>
                    <Link href="#">Contact Us</Link>
                </div>
            </div>
        </footer>
    );
}
