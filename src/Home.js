import React from 'react'
import './Home.css';
import Product from "./product";


const Home = () => {
    return (
        <div className='home'>
            <div className="home_container">
                <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/online-selling-sites.jpg?v=1612464609&width=1024" alt="" className="home_image" />
                <div className="home_row">
                    <Product
                        id='123'
                        title= "Gaming Chair Table Desktop Computer "
                        price={30}
                        rating={5}
                        image="https://ae01.alicdn.com/kf/H7d319b141b4b4b5a951af79c4f90dd29i/Gaming-Chair-Table-Desktop-Computer-Silla-Gamer-Desk-Cross-Border-Esports-Cadeira-Gamer-Full-Set-Of.jpg_Q90.jpg_.webp"
                    />
                    <Product
                        id='1234'
                        title="Boom Arm"
                        price={50}
                        rating={3}
                        image="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/15/9025151/1.jpg?9839"
                    />
                    <Product
                        id='12345'
                        title="Mic"
                        price={100}
                        rating={5}
                        image="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/86/5315522/1.jpg?4763"
                    />
                </div>
                <div className="home_row">
                    <Product
                        id='123456'
                        title="LED Light"
                        price={90}
                        rating={1}
                        image="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/86/5315522/1.jpg?4763"
                    />
                    <Product
                        id='1234567'
                        title="Shoe"
                        price={30}
                        rating={5}
                        image="https://ae01.alicdn.com/kf/H2b33ff08befa4c66992009178cea11b7f/Princepard-Outdoor-Children-Orthopedic-Shoes-Leather-Other-Function-Shoes-Autumn-White-Sneaker-Shoes.jpg_Q90.jpg_.webp"
                    />
                    <Product
                        id='12345678'
                        title="Mic"
                        price={100}
                        rating={5}
                        image="https://ae01.alicdn.com/kf/S10d0cb082ee14a039f63fdad8f098f274/Wireless-Lavalier-Microphone-Portable-Audio-Video-Recording-Mini-Mic-for-iPhone-Android-Live-Broadcast-Gaming-Phone.jpg_Q90.jpg_.webp"
                    />
                </div>
                <div className="home_row">
                    <Product
                        id='1234'
                        title="Boom Arm"
                        price={50}
                        rating={3}
                        image="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/57/861234/1.jpg?8561"
                    />
                    <Product
                        id='123456'
                        title="TV Background Light Decoration USB Strip LED Light"
                        price={90}
                        rating={1}
                        image="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/78/5917591/5.jpg?4570"
                    />
                    
                </div>
            </div>

        </div>
    )
}

export default Home