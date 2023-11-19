import React, {useState, useEffect} from 'react';
import Card from '../Card/Card.js';
import products from "../../datas/products.json";
import { fetchAllProductsFromDB } from '../../services/fetchAllProductsFromDB.js';
import './style.css';

const BestSellersList = () => {
    const [bestSellers, setBestSellers] = useState(null);
    const urlAllProducts = 'http://localhost:3001/catalogue/products'; 

    const getBestSellers = async()=>{
        let datas = await fetchAllProductsFromDB(urlAllProducts) 
        setBestSellers(datas.filter((data) =>data.isBestSeller))
    }

    useEffect(()=>{
        getBestSellers()
    }, [])

    return (
        <>
        <div className="main__best-sellers container my-4 py-2">
            <div  className="main__best-sellers__title fw-bolder">
                <h2 className="text-uppercase fw-bolder">Best sellers</h2>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 justify-content-md-around" id="bestseller-container">
                {bestSellers && bestSellers.map((product, index) =>{
                    return <Card productInfos={product} key={index}/>
                })}
            </div>
        </div>
        </>
    );
};

export default BestSellersList;