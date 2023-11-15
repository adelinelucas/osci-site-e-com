import React, { useState} from 'react';

const Panier = () => {
     // État pour stocker les articles dans le panier
  const [cartItems, setCartItems] = useState([]);

  // Fonction pour ajouter un article au panier
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Fonction pour supprimer un article du panier
  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };

  // Calcul du total du panier
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      {/* Affichage des articles dans le panier */}
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <p>Total: ${calculateTotal()}</p>

      {/* Exemple de bouton d'ajout d'article au panier */}
      <button onClick={() => addToCart({ id: 1, name: 'Example Item', price: 19.99 })}>
        Add to Cart
      </button>
     
            
        </div>
    );
};

export default Panier;