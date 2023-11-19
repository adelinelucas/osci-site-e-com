import React, {useContext, useState} from'react';

const CartContext = React.createContext();

export const CartProvider = ({children}) =>{

    const [productsList,setProductsList] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0)
    const [quantityProducts, setQuantityProducts] = useState(0)

    return (
        <CartContext.Provider value={{
                productsList, 
                setProductsList,
                totalProducts,
                setTotalProducts,
                quantityProducts, 
                setQuantityProducts
                }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () =>{
    return useContext(CartContext);
}