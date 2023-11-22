import React, { useEffect } from "react";
import { useCartContext } from "../../contextes/CartContext";
import "./style.css";

const PanierDetailsProducts = ({ productInfos }) => {
  const {
    productsList,
    setProductsList,
    setTotalProducts,
    setQuantityProducts,
    totalProducts,
    quantityProducts,
  } = useCartContext();

  useEffect(() => {
    console.log(productInfos);
  }, [productInfos]);

  // suppression d'un produit dans la liste panier
  const deleteRow = () => {
    const NewProductsList = productsList.map((product) => {
      if (product[0] != productInfos[0]) return product;
    });
    let filtredProducts = NewProductsList.filter((product) => product);
    setProductsList(filtredProducts);
    setQuantityProducts(quantityProducts - productInfos[4]);
    setTotalProducts(totalProducts - productInfos[5]);
  };

  const minusRow = () => {
    // je parcours ma liste de produit
    // si id du produit === id du component
    // je mets à jour prix total et quantité
    // je renvoie le tout dans la variable updateProductsList
    const UpdateProductsList = productsList.map((product) => {
      if (product[0] === productInfos[0]) {
        product[4]--;
        product[5] -= productInfos[3];
      }
      return product;
    });
    // je filtrer ma liste contenue dans UpdateProductsList pour m'assurer que les quantités soient supérieure à 0
    // si quantité du produit ==== 0 je ne renvoie pas le produit en question
    let filtredProducts = UpdateProductsList.filter(
      (product) => product[4] > 0
    );

    // je mets à jour mon context
    // mise à jour de ma liste de produits
    setProductsList(filtredProducts);
    // mise à jour de la quantité total du panier
    setQuantityProducts(quantityProducts - 1);
    // mise à jour du montant total du panier
    setTotalProducts(totalProducts - productInfos[3]);
  };

  const plusRow = () => {
    // je parcours ma liste de produit
    // si id du produit === id du component
    // je mets à jour prix total et quantité
    // je renvoie le tout dans la variable updateProductsList
    const UpdateProductsList = productsList.map((product) => {
      if (product[0] === productInfos[0]) {
        product[4]++;
        product[5] += productInfos[3];
      }
      return product;
    });
    // je filtrer ma liste contenue dans UpdateProductsList pour m'assurer que les quantités soient supérieure à 0
    // si quantité du produit ==== 0 je ne renvoie pas le produit en question
    let filtredProducts = UpdateProductsList.filter(
      (product) => product[4] > 0
    );

    // je mets à jour mon context
    // mise à jour de ma liste de produits
    setProductsList(filtredProducts);
    // mise à jour de la quantité total du panier
    setQuantityProducts(quantityProducts + 1);
    // mise à jour du montant total du panier
    setTotalProducts(totalProducts + productInfos[3]);
  };

  return (
    <>
      <div className="Container">
        <div className="ImgContainer">
          <img className="Img" src={productInfos[6]} alt={productInfos[1]} />
        </div>
        <div className="InfoContainer">
          <div className="Titre">
            <p className="TitreGros">{productInfos[1]}</p>
            <div>{productInfos[2]}</div>
          </div>
          <div className="DeleteRaw">
            <button onClick={deleteRow}>🗑️</button>
            <div>
              <button className="ButtonProducts" onClick={minusRow}>
                -
              </button>
              {productInfos[4]}
              <button className="ButtonProducts" onClick={plusRow}>
                +
              </button>
            </div>
          </div>
          <div className="Total">Total: {productInfos[5]}€</div>
        </div>
      </div>
    </>
  );
};

export default PanierDetailsProducts;
