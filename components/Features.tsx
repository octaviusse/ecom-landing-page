import React from 'react';

export default function Features() {
    return (
        <section id="features" className="features">
            <div className="container">
                <h2 className="section-title">Premium Features</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">💓</div>
                        <h3>Heart Rate Monitor</h3>
                        <p>
                            24/7 continuous heart rate tracking with advanced sensors for
                            accurate health monitoring
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🏃</div>
                        <h3>Activity Tracking</h3>
                        <p>
                            Track running, cycling, swimming, and 50+ sports modes with GPS
                            precision
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💧</div>
                        <h3>Water Resistant</h3>
                        <p>
                            5ATM water resistance - perfect for swimming and water sports
                            activities
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🔋</div>
                        <h3>Long Battery Life</h3>
                        <p>
                            Up to 7 days of battery life on a single charge with fast charging
                            support
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📱</div>
                        <h3>Smart Notifications</h3>
                        <p>
                            Receive calls, messages, and app notifications directly on your
                            wrist
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">😴</div>
                        <h3>Sleep Tracking</h3>
                        <p>
                            Monitor sleep quality with detailed insights into sleep stages and
                            patterns
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
