import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
                <div className="hover-badge">Premium Quality</div>
            </div>
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
