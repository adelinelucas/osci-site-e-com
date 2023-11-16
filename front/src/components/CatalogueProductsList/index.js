import React, {useState, useEffect} from 'react';
import products from "../../datas/products.json"
import Card from '../Card/Card.js';
import {useCatalogueContext} from '../../contextes/CatalogueContext'
import { fetchAllProductsFromDB } from '../../services/fetchAllProductsFromDB.js';

const CatalogueProductsList = () => {
// console.log(products.products)
// const myProducts = products.products
    const {searchProducts,searchCategory} = useCatalogueContext();
    const [products, setProducts] = useState(null);
    console.log('line12',products)
    const urlAllProducts = 'http://localhost:3001/catalogue/products'; 

    const getProducts = async()=>{
        setProducts(await fetchAllProductsFromDB(urlAllProducts) )
    }

    useEffect(()=>{
        getProducts()
    }, [])

    return (
        <>
        <div className="main__articles_container container ">
            <div className="row row-cols-1 row-cols-sm-2 justify-content-md-between" id="articles-container">
                {products && products.map((product, index) =>{
                    return <Card productInfos={product} key={index}/>
                })}
            </div>
        </div>
        </>
    );
};

export default CatalogueProductsList;