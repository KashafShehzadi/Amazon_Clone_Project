import React, { useState } from 'react';
import "../CSS/Home.css";
import Product from '../components/Product';

// Importing images from the assets folder
import heroImage from '/src/assets/hero.jpg';
import hero2 from "/src/assets/Hero1.jpg";
import hero3 from "/src/assets/Hero3.jpg";
import hero4 from "/src/assets/Hero4.jpg";
import hero5 from "/src/assets/hero5.jpg";
import mouseImage from '/src/assets/mouse.jpg';
import bottlesImage from '/src/assets/bottles.jpg';
import puzzlesImage from '/src/assets/puzzles.jpg';
import ovenImage from '/src/assets/oven.jpg';
import toysImage from '/src/assets/toys.jpg';
import rollersImage from '/src/assets/rollers.jpg';

const Home = () => {
    const sliderImages = [heroImage, hero2, hero3, hero4, hero5];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next image
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    };

    // Function to go to the previous image
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1);
    };

    return (
        <div className='home'>
            <div className='home_container'>
                <div className="slider">
                    <button className="slider__button left" onClick={prevSlide}>‹</button>
                    <img className="hero" src={sliderImages[currentIndex]} alt="Hero" />
                    <button className="slider__button right" onClick={nextSlide}>›</button>
                </div>

                {/* three-products */}
                <div className="home__row">
                    <Product id="3" title="Puzzles" price={29.90} image={puzzlesImage} />
                    <Product id="4" title="Oven" price={29.90} image={ovenImage} />
                    <Product id="5" title="Toys" price={29.90} image={toysImage} />
                </div>

                {/* two-products */}
                <div className="home__row">
                    <Product id="1" title="Accessories" price={29.90} image={mouseImage} />
                    <Product id="2" title="Kitchen Things" price={29.90} image={bottlesImage} />
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
