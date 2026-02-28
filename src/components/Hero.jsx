import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <h2 className="hero-greeting">Marhaban ya Ramadhan</h2>
                <h1 className="hero-title">Pure Joy in Every Bite.</h1>
                <p className="hero-subtitle">
                    Celebrate the holy month with our premium selection of handcrafted cookies.
                    Baked with love, premium butter, and authentic recipes.
                </p>
                <a href="#collection" className="cta-button">Explore the Collection</a>
            </div>
            <div className="hero-overlay"></div>
        </section>
    );
};

export default Hero;
