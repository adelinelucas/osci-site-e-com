import React, {useContext, useState} from'react';

const CataloguePanierContext = React.createContext();

export const CataloguePanierProvider = ({children}) =>{

    const [panier,setPanier] = useState();

    return (
        <CataloguePanierProvider.Provider value={{panier, setPanier}}>
            {children}
        </CataloguePanierProvider.Provider>
    )
}

export const useCataloguePanierContext = () =>{
    return useContext(CataloguePanierContext);
}