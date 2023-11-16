import React, {useContext, useState} from'react';

const CataloguePanierContext = React.createContext();

export const CataloguePanierProvider = ({children}) =>{

    const [productsList,setProductsList] = useState({});
    const [totalProducts, setTotalProducts] = useState(0)
    const [quantityProducts, setQuantityProducts] = useState(0)

    return (
        <CataloguePanierProvider.Provider value={{
                productsList, 
                setProductsList,
                totalProducts,
                setTotalProducts,
                quantityProducts, 
                setQuantityProducts
                }}>
            {children}
        </CataloguePanierProvider.Provider>
    )
}

export const useCataloguePanierContext = () =>{
    return useContext(CataloguePanierContext);
}