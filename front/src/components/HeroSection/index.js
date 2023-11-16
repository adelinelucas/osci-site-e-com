import React from 'react';
import './style.css';

const HeroSection = () => {
    return (
        <div className="header__hero-section container">
            <div className="header__hero-section--promotion  d-flex align-items-center justify-content-center">
                <p className="text-light text-center">- 20% on makeup</p>
            </div>
        </div>
    );
};

export default HeroSection;