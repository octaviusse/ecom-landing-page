import React from 'react';

export default function Reviews() {
    return (
        <section id="reviews" className="reviews">
            <div className="container">
                <h2 className="section-title">Customer Reviews</h2>
                <div className="reviews-grid">
                    <div className="review-card">
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p className="review-text">
                            "Best smartwatch I've ever owned! The battery life is incredible
                            and the fitness tracking is super accurate."
                        </p>
                        <p className="review-author">- حمزة</p>
                    </div>
                    <div className="review-card">
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p className="review-text">
                            "Love the sleek design and all the features. The heart rate
                            monitor is very precise and the sleep tracking helps me improve my
                            rest."
                        </p>
                        <p className="review-author">- أمينة</p>
                    </div>
                    <div className="review-card">
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p className="review-text">
                            "Perfect for my active lifestyle. Water resistance is great for
                            swimming, and I love receiving notifications on my wrist."
                        </p>
                        <p className="review-author">- ياسمين</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
