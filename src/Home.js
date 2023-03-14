import React from 'react'
import './Home.css';
import Product from "./product";


const Home = () => {
    return (
        <div className='home'>
            <div className="home_container">
                <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/online-selling-sites.jpg?v=1612464609&width=1024" alt="" className="home_image" />
                <div className="home_row">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
                <div className="home_row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="home_row">
                    <Product />
                    <Product/>
                </div>
            </div>

        </div>
    )
}

export default Home