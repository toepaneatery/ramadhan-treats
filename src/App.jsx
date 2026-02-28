import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import { products } from './data/products';
import './index.css';

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />

        <div className="discount-banner">
          <div className="discount-content">
            <h3>Special Ramadhan Offers!</h3>
            <div className="discount-tiers">
              <div className="tier">Buy <strong>2</strong> <span className="discount-amount">Get 5% OFF</span></div>
              <div className="tier">Buy <strong>4</strong> <span className="discount-amount">Get 8% OFF</span></div>
              <div className="tier">Buy <strong>10</strong> <span className="discount-amount">Get 10% OFF</span></div>
            </div>
          </div>
        </div>

        <section id="collection" className="collection-section">
          <div className="collection-header">
            <h2>Our Signature Collection</h2>
            <div className="divider"></div>
            <p>Perfect for gifting or your family's festive table.</p>
          </div>

          <div className="products-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <footer id="footer" className="footer">
        <div className="footer-content">
          <h2>Toepan Eatery<span className="dot">.</span></h2>
          <p>Delivering sweetness to your doorstep.</p>
          <div className="socials">
            <a href='https://www.instagram.com/xii.allabout.kuliner/' target="_blank" rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'var(--primary)' }}>
              <span>Instagram</span>
            </a>
            <a href='https://wa.me/6285881975158' target="_blank" rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'var(--primary)' }}>
              <span>WhatsApp</span>
            </a>
          </div>
          <p className="copyright">© 2026 Toepan Eatery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
