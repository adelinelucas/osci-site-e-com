import React, { useState, useEffect } from "react";
import "./Panier.css";
import { useNavigate } from "react-router-dom";
import {useCartContext} from '../../contextes/CartContext';
import PanierDetailsProducts from "../../components/PanierDetailsProducts";

const Panier = () => {
  const [cartItems, setCartItems] = useState([]);
  const {
    totalProducts,
    setTotalProducts, 
    productsList,
    setProductsList,
    quantityProducts, 
    setQuantityProducts
  } = useCartContext();
  
  //je rajoute des produit a ma liste de cart
 
  const navigate = useNavigate();

  function cliquer() {
    navigate("/catalogue");
  }
  function clique() {
    navigate("/");
  }
  function cliqu() {
    navigate("/checkout");
  }


  useEffect(() => {
    console.log(productsList);
  },[productsList])
  
  return (
  
          
   
   
    <div id="panier">
      {
        productsList.length > 0 ? 
          <div>
            {productsList.map((product) => (
                <PanierDetailsProducts productInfos={product} key={product[0]}/>
            ))}
            <p>Quantité produit panier: {quantityProducts }</p>
            <p>Total: {totalProducts } €</p>
      <button
        onClick={() => ({ id: 1, name: "Example Item", price: 19.99 })}
      >
        
      </button>  
          </div>
          :
          <>
            <h2>YOUR CART IS EMPTY.</h2>
            <a class="btn btn-secondary btn-lg  " onClick={cliquer}>
          Continue Shopping
            </a>
          </>   
      }
      
      <div id="shop">
        <a id="chek" class="btn btn-primary btn-lg " onClick={clique}>
          Home
        </a>
        <a id="check" class="btn btn-primary btn-lg " onClick={cliqu}>
          Checkout 
        </a>
      </div>
    </div>
  );

  };

export default Panier;
