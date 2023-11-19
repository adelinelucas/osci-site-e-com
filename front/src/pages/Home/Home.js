import React,{useState, useEffect} from "react";

import "./Home.css";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
 './images/ara1.jpg',
 './images/ara2.jpg',
 './images/ara3.jpg',

    // Ajoutez autant de chemins d'images que nécessaire
  ];

  const nextImage = () => {
  setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
};

const prevImage = () => {
  setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
};
useEffect(() => {
  const interval = setInterval(() => {
    nextImage();
  }, 5000);


  return () => clearInterval(interval); // Nettoyer l'intervalle lors de la suppression du composant
}, [currentImage]);

return (
  <div className="image-slider">
    <button className="bouton-slider" onClick={prevImage}>&lt;</button>
    <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
    <button onClick={nextImage}>&gt;</button>
  </div>
);
};
export default Home;
