import React, {useContext, useState, useEffect} from'react';
import { fetchAllProductsFromDB } from '../services/fetchAllProductsFromDB';

const CatalogueContext = React.createContext();

export const CatalogueProvider = ({children}) =>{

    const [products,setProducts] = useState({});
    // const [bestSellers, setBestSellers] = useState({});
    const [searchProducts, setSearchProducts] = useState('');
    const [searchCategory, setSearchCategory] = useState(null);
    const [filterByPrice, setFilterByPrice] = useState(null);
    const [favouritesList, setFavouritesList] = useState([]);
    const [popInModalDisplay, setPopInModalDisplay] = useState(false);
    const [popInModalMessage, setPopInModalMessage] = useState({});

    // récupération des produits de l'application 
    // URL pour récupérer tous les produits :
        // a gérer 
        // le filtre des produits par prix faire des fonctions pour mettre à jour products
        // le filtre des produits par categorie faire des fonctions pour mettre à jour products

        // 
    return (
        <CatalogueContext.Provider value={{
            products, 
            setProducts,
            searchProducts,
            searchCategory, 
            setSearchCategory,
            setSearchProducts,
            filterByPrice,
            setFilterByPrice,
            favouritesList,
            setFavouritesList,
            popInModalDisplay, 
            setPopInModalDisplay,
            popInModalMessage,
            setPopInModalMessage
        }}>
            {children}
        </CatalogueContext.Provider>
    )
}

export const useCatalogueContext = () =>{
    return useContext(CatalogueContext);
}