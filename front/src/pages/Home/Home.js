import React from "react";
import { useState } from "react";
import "./Home.css";

const Home = () => {
  function test() {
    console.log("test");
  }
  const images = [
    "images/icons8-fedex-100.png",
    "images/icons8-fedex-100.png",
    "images/icons8-fedex-100.png",
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
