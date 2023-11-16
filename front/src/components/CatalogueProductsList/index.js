import React from 'react';
import products from "../../datas/products.json"
import Card from '../Card/Card.js';

const CatalogueProductsList = () => {
console.log(products.products)
const myProducts = products.products
    return (
        <>
        <div className="main__articles_container container ">
            <div className="row row-cols-1 row-cols-sm-2 justify-content-md-between" id="articles-container">
                {myProducts.map((product, index) =>{
                    return <Card productInfos={product} key={index}/>
                })}
            </div>
        </div>
        </>
    );
};

export default CatalogueProductsList;