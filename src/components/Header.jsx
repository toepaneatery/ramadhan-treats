import React, { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMobileMenu = () => setIsMenuOpen(false);

    return (
        <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
            <div className="header-container">
                <a href="#hero" className="logo-link" onClick={closeMobileMenu}>
                    <h1 className="logo">Toepan Eatery<span className="dot">.</span></h1>
                </a>

                <button
                    className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span><span></span><span></span>
                </button>

                <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>

                <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#hero" onClick={closeMobileMenu}>Home</a>
                    <a href="#collection" onClick={closeMobileMenu}>Collection</a>
                    <a href="#footer" className="order-btn" onClick={closeMobileMenu}>Order Now</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
