import React, { useEffect } from "react";
import { useCartContext } from "../../contextes/CartContext";

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
    let filtredProducts = NewProductsList.filter((product) => product)
    setProductsList(filtredProducts);
    setQuantityProducts(quantityProducts - 1)
    setTotalProducts(totalProducts - productInfos[3])
  };


  const minusRow = () => {
        // je parcours ma liste de produit
            // si id du produit === id du component
            // je mets à jour prix total et quantité
            // je renvoie le tout dans la variable updateProductsList
      const UpdateProductsList = productsList.map((product) => {
        if(product[0] === productInfos[0]) {
            product[4] --;
            product[5] -= productInfos[3]
        }
        return product
      })
      // je filtrer ma liste contenue dans UpdateProductsList pour m'assurer que les quantités soient supérieure à 0 
      // si quantité du produit ==== 0 je ne renvoie pas le produit en question
      let filtredProducts = UpdateProductsList.filter((product) => product[4]>0)

      // je mets à jour mon context
      // mise à jour de ma liste de produits
      setProductsList(filtredProducts);
      // mise à jour de la quantité total du panier
      setQuantityProducts(quantityProducts - 1)
      // mise à jour du montant total du panier
      setTotalProducts(totalProducts - productInfos[3])
    }

 const plusRow = () => {
        // je parcours ma liste de produit
            // si id du produit === id du component
            // je mets à jour prix total et quantité
            // je renvoie le tout dans la variable updateProductsList
      const UpdateProductsList = productsList.map((product) => {
        if(product[0] === productInfos[0]) {
            product[4] ++;
            product[5] += productInfos[3]
        }
        return product
      })
      // je filtrer ma liste contenue dans UpdateProductsList pour m'assurer que les quantités soient supérieure à 0 
      // si quantité du produit ==== 0 je ne renvoie pas le produit en question
      let filtredProducts = UpdateProductsList.filter((product) => product[4]>0)

      // je mets à jour mon context
      // mise à jour de ma liste de produits
      setProductsList(filtredProducts);
      // mise à jour de la quantité total du panier
      setQuantityProducts(quantityProducts + 1)
      // mise à jour du montant total du panier
      setTotalProducts(totalProducts + productInfos[3])
    }

  return (
    <>
      <div className="row product-row m-4" id={"card-" + productInfos[0]}>
        <div className="col-4">
          <div className="row m-4"></div>
          <div className="row">
            <div className="col">
              <img
                className="img-fluid"
                src={productInfos[6]}
                alt={productInfos[1]}
              />
            </div>
          </div>
          <div className="row m-4"></div>
        </div>
        <div className="col-8" style={{marginBottom:"10%"}}>
          <div className="row m-4">
            <div className="col">
              <h2>{productInfos[1]}</h2>
            </div>
          </div>
          <div className="row m-4">
            <div className="col">{productInfos[2]}</div>
          </div>
          <div className="row m-4 ">
            <div className="row m-4 ara">
              <div className="col-4 border fw-bold">Quantité</div>
              <div className="col-4 border fw-bold">Prix Unitaire</div>
              <div className="col-4 border fw-bold">Prix Total</div>
            </div>
            <div className="row m-4">
              <div className="col-4 border" id="quantity-1">
                {productInfos[4]}
              </div>
              <div className="col-4 border" id="price-1">
                {productInfos[3]}
              </div>
              <div className="col-4 border" id="total-1">
                {productInfos[5]}
              </div>
            </div>
            <div className="row m-4">
              <div className="col-3">
                <button
                  href="#!"
                  className="deletebtn btn btn-danger"
                  id="delete-1"
                  onClick={deleteRow}
                >
                  <i className="bi bi-trash" id="icondelete-1"></i>
                </button>
              </div>
              <div className="col-3"></div>
              <div className="col-3">
                <button id="minus-1" className="btn btn-dark minusbtn" 
                 onClick={minusRow}
                 >
                  -
                </button>
              </div>
              <div className="col-3">
                <button id="add-1" className="btn btn-dark addbtn"
                onClick={plusRow}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PanierDetailsProducts;
