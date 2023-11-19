import React, {useContext, useState} from'react';

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