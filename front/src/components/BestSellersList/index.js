import React from 'react';
import Card from '../Card/Card.js';
import products from "../../datas/products.json";
import './style.css';

const BestSellersList = () => {
    const myProducts = products.products.filter((product) => product.isBestSeller)

    return (
        <>
        <div className="main__best-sellers container my-4 py-2">
            <div  className="main__best-sellers__title fw-bolder">
                <h2 className="text-uppercase fw-bolder">Best sellers</h2>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 justify-content-md-around" id="bestseller-container">
                {myProducts.map((product, index) =>{
                    return <Card productInfos={product} key={index}/>
                })}
            </div>
        </div>
        </>
    );
};

export default BestSellersList;