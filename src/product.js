import React from "react";
import './product.css';

function Product() {
    return (
        <div className="pro">
            <div className="product">
                <div className="product_info">
                    <p>15 Liters Gricd Frijbox</p>
                    <p className="product_price">$30</p>

                    <p className="product_rating">⭐⭐⭐</p>
                </div>
                <img src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/86/5315522/1.jpg?4763" alt="" className="product_image" />

                <button>Add to Basket</button>
            </div>

        </div>

    )
}
export default Product;