import React from 'react';

export default function Specs() {
    return (
        <section id="specs" className="specs">
            <div className="container">
                <h2 className="section-title">Technical Specifications</h2>
                <div className="specs-grid">
                    <div className="spec-item">
                        <span className="spec-label">Display</span>
                        <span className="spec-value">1.4" AMOLED Touchscreen</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Resolution</span>
                        <span className="spec-value">454 x 454 pixels</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Processor</span>
                        <span className="spec-value">Dual-core 1.2GHz</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Storage</span>
                        <span className="spec-value">8GB Internal</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Connectivity</span>
                        <span className="spec-value">Bluetooth 5.0, WiFi, GPS</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-label">Compatibility</span>
                        <span className="spec-value">iOS 12+ / Android 6.0+</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
