import React from "react";

import ProductImage from "../assets/products.png";
import product1 from "../assets/product1.png"
import product2 from "../assets/product2.png"

import "../styles/Products.css"

export function Products() {
    return (
        <div className="products">
            <img src={ProductImage} alt="" />

            <div className="products-info" id="products">
                <div className="product-item1">
                    <h3>LAKADANG TURMERIC</h3>
                    <img src={product1} alt="product1" />
                    <a href="#">SHOP</a>
                    <p>Learn More</p>
                </div>
                <div className="product-item2">
                    <h3>SHARBATI WHEAT</h3>
                    <img src={product2} alt="product2" />
                    <a href="#">SHOP</a>
                    <p>Learn More</p>
                </div>
            </div>
        </div>
    )
}