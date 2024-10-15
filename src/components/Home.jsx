import React from 'react'
import "../CSS/Home.css"
import Product from '../components/Product'

const Home = () => {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className="hero" src="/public/hero.jpg" />
                {/* two-products */}
                <div className="home__row">
                    <Product id="1" title="Accesories" price={29.90} image="/public/mouse.jpg" />
                    <Product id="2" title="Kitchen Things" price={29.90} image="/public/bottles.jpg" />

                </div>

                {/* three-products */}
                <div className="home__row">
                    <Product id="3" title="Puzzles" price={29.90} image="/public/puzzles.jpg" />

                    <Product id="4" title="Oven" price={29.90} image="/public/oven.jpg" />

                    <Product id="5" title="Toys" price={29.90} image="/public/toys.jpg" />

                </div>
                {/* one-products */}
                <div className="home__row">
                    <Product id="6" title="Bottles" price={29.90} image="/public/rollers.jpg" />

                </div>
            </div>
        </div>

    )
}

export default Home