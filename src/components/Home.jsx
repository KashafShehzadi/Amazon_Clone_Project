import React from 'react';
import "../CSS/Home.css";
import Product from '../components/Product';

// Importing images from the assets folder
import heroImage from '/src/assets/hero.jpg';
import mouseImage from '/src/assets/mouse.jpg';
import bottlesImage from '/src/assets/bottles.jpg';
import puzzlesImage from '/src/assets/puzzles.jpg';
import ovenImage from '/src/assets/oven.jpg';
import toysImage from '/src/assets/toys.jpg';
import rollersImage from '/src/assets/rollers.jpg';

const Home = () => {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className="hero" src={heroImage} alt="Hero" />

                {/* two-products */}
                <div className="home__row">
                    <Product id="1" title="Accesories" price={29.90} image={mouseImage} />
                    <Product id="2" title="Kitchen Things" price={29.90} image={bottlesImage} />
                </div>

                {/* three-products */}
                <div className="home__row">
                    <Product id="3" title="Puzzles" price={29.90} image={puzzlesImage} />
                    <Product id="4" title="Oven" price={29.90} image={ovenImage} />
                    <Product id="5" title="Toys" price={29.90} image={toysImage} />
                </div>

                {/* one-product */}
                <div className="home__row">
                    <Product id="6" title="Bottles" price={29.90} image={rollersImage} />
                </div>
            </div>
        </div>
    );
};

export default Home;
