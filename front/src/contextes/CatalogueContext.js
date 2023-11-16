import React, {useContext, useState} from'react';

const CatalogueContext = React.createContext();

export const CatalogueProvider = ({children}) =>{

    const [products,setProducts] = useState({});
    const [searchProducts, setSearchProducts] = useState(null)

    const [favouritesList, setFavouritesList] = useState({});
    const [popInModalDisplay, setPopInModalDisplay] = useState(false);
    const [popInModalMessage, setPopInModalMessage] = useState({});
        // a gérer 
        // le filtre des produits par prix faire des fonctions pour mettre à jour products
        // le filtre des produits par categorie faire des fonctions pour mettre à jour products

        // 
    return (
        <CatalogueContext.Provider value={{
            products, 
            setProducts,
            searchProducts,
            setSearchProducts,
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