import React, {useState, useEffect} from 'react';
import Card from '../Card/Card.js';
import {useCatalogueContext} from '../../contextes/CatalogueContext';
import { fetchAllProductsFromDB } from '../../services/fetchAllProductsFromDB.js';

const CatalogueProductsList = () => {
    const {searchProducts,searchCategory,filterByPrice, setSearchCategory} = useCatalogueContext();
    const [products, setProducts] = useState(null);
    const [allProductsList, setAllProductsList] = useState(null)
    const getProducts = async()=>{
        const urlAllProducts = 'http://localhost:3001/catalogue/products'; 
        setProducts(await fetchAllProductsFromDB(urlAllProducts) )
        setAllProductsList(await fetchAllProductsFromDB(urlAllProducts))
    }

    const filterProduct = async(url) =>{
        setProducts(await fetchAllProductsFromDB(url) )
    }

    // chargement de tous les produits depuis la bdd
    useEffect(()=>{
        getProducts()
    }, [])

    // filtrage des produits en fonction du terme de recherche
    useEffect(()=>{
        if(searchProducts){
            let filteredProducts = allProductsList.filter((product)=> {
                if((product.category).toString().toLowerCase().includes(searchProducts)){
                    return product;
                }
                if((product.title).toLowerCase().includes(searchProducts)){
                    return product;
                }
                if((product.resume).toLowerCase().includes(searchProducts)){
                    return product;
                }
            } )
            setProducts(filteredProducts)
        }
    }, [searchProducts])

    // filtrage des produits en fonction de la categorie
    useEffect(()=>{
        if(searchCategory) {
            if(searchCategory === 'all') return setProducts(allProductsList)
            else{
                // allProductsList.map((product)=> {                  
                //     if((product.category).toString().includes(searchCategory)) {
                //         filteredProducts.push(product)
                //     }
                // })
                let filteredProducts = allProductsList.filter((product)=> (product.category).toString().includes(searchCategory) )
                setProducts(filteredProducts)
            }  
        }
    }, [searchCategory])

    // affichage des produits par prix, 'asc' ou 'desc'
    useEffect(()=>{
        let urlFilterProductsByPrice = ''
        if(filterByPrice === 'asc'){
            urlFilterProductsByPrice = 'http://localhost:3001/catalogue/products/asc'; 
        }
        if(filterByPrice === 'desc'){
            urlFilterProductsByPrice = 'http://localhost:3001/catalogue/products/desc'; 
        }
        filterProduct(urlFilterProductsByPrice)
    }, [filterByPrice])

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