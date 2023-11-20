import React, { useState, useEffect } from "react";
import "./Panier.css";
import { useNavigate } from "react-router-dom";
import {useCartContext} from '../../contextes/CartContext';

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

  const navigate = useNavigate();

  function cliquer() {
    navigate("/catalogue");
  }
  function clique() {
    navigate("/checkout");
  }

  useEffect(() => {
    console.log(productsList);
  },[productsList])
  
  return (
    <div id="panier">
      <h2>YOUR CART IS EMPTY.</h2>
      <a class="btn btn-secondary btn-lg  " onClick={cliquer}>
        Continue Shopping
      </a>
      <div id="shop">
        <a id="chek" class="btn btn-primary btn-lg " onClick={clique}>
          Check Out ALL
        </a>
        <a id="check" class="btn btn-primary btn-lg " onClick={clique}>
          Chek out Selected Item(s)
        </a>
      </div>
      <ul>
        {productsList.map((product) => (
          <li key={product[0]}>
            {product[1]} - ${product[5]}
            {/* <button onClick={() => removeFromCart(item.id)}>Remove</button> */}
          </li>
        ))}
      </ul>
      <p>Quantité produit panier: {quantityProducts }</p>
      <p>Total: {totalProducts } €</p>
      {/* Exemple de bouton d'ajout d'article au panier */}{" "}
      {/* <button
        onClick={() => addToCart({ id: 1, name: "Example Item", price: 19.99 })}
      >
        Add to Cart
      </button> */}
    </div>
  );
};

export default Panier;
