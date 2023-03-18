import React from "react";
import './product.css';

function Product({ id, title, image, price, rating }) {
    return (
        <div className="pro">
            <div className="product">
                <div className="product_info">
                    <p>{title}</p>
                    <div className="pp">
                        <p className="product_price">
                            <small>$</small>
                            <strong>{price}</strong>
                        </p>

                        <div className="product_rating">
                            {Array(rating)
                                .fill()
                                .map((_, i) => (
                                    <p>⭐</p>
                                ))}
                        </div>
                    </div>
                </div>
                <img src={image} />

                <button>Add to Basket</button>
            </div>

        </div>

    )
}
export default Product;