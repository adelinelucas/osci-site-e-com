import React, { useState } from "react";
import "./Panier.css";
import { useNavigate } from "react-router-dom";

const Panier = () => {
  const navigate = useNavigate();

  function cliquer() {
    navigate("/catalogue");
  }
  function clique() {
    navigate("/checkout");
  }
  

  const [cartItems, setCartItems] = useState([]);

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
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            {/* <button onClick={() => removeFromCart(item.id)}>Remove</button> */}
          </li>
        ))}
      </ul>
      {/* <p>Total: ${calculateTotal()}</p> */}
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
