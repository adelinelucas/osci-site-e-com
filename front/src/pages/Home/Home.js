import React from 'react';
import { useState } from'react';
import "./Home.css"


const Home = () => {
    const images = [
        '',
        'url_de_votre_image_2.jpg',
        'url_de_votre_image_3.jpg',
      ];
    
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
      const nextSlide = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      const prevSlide = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };
    
      return (
        <div className="image-slider">
          <button onClick={prevSlide}>&lt;</button>
          <img
            className="slider-image"
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
          />
          <button onClick={nextSlide}>&gt;</button>
        </div>
    );
};

export default Home;