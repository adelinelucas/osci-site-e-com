import React,{useContext, useState} from "react";


const CartContext = React.createContext();


export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);


    return (
        <CartProvider.Provider value={{cart, setCart}}>
            {children}
        </CartProvider.Provider>
    )
}


export const useCartContext = () =>{
    return useContext(CartContext);
}

