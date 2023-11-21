import React from 'react';
import {useCartContext} from '../../contextes/CartContext';

const CatalogueCartDetailProduct = ({productInfos}) => {
    const {productsList,setProductsList, totalProducts, setTotalProducts, quantityProducts,setQuantityProducts} = useCartContext();

    const handleAddProduct = () =>{
        if(productsList.length > 0){
            // check if id product is in productsList array
            let isProductInCart = productsList.filter((product)=>product[0] === productInfos[0])

            if( isProductInCart.length > 0){
                // si produit déja dans panier, changer la quantité et le prix total du produit
                let productsListUpdated = productsList.map((product) =>{
                    if(product[0] === productInfos[0]) {
                        product[4] ++;
                        product[5] += productInfos[3]
                    }
                    return product
                })
                // je modifie mon context 
                setProductsList(productsListUpdated)
                setTotalProducts( totalProducts + productInfos[3])
                setQuantityProducts(quantityProducts + 1)
            }
        }
    }

    const handleRemoveOneQtyProduct = () =>{
        if(productsList.length > 0){
            // check if id product is in productsList array
            let isProductInCart = productsList.filter((product)=>product[0] === productInfos[0])

            if( isProductInCart.length > 0){
                // si produit déja dans panier, changer la quantité et le prix total du produit
                let productsListUpdated = productsList.map((product) =>{
                    if(product[0] === productInfos[0]) {
                        product[4] --;
                        product[5] -= productInfos[3]
                    }
                    return product
                })
                setProductsList(productsListUpdated.filter((product) => product[4]> 0))
                setTotalProducts( totalProducts - productInfos[3])
                setQuantityProducts(quantityProducts - 1)
            }
        }
    }

    const handleRemoveProduct = () =>{
        if(productsList.length > 0){
            // si produit déja dans panier, changer la quantité et le prix total du produit
            setProductsList(productsList.filter((productListEl) => productListEl[0] !== productInfos[0]))
            setTotalProducts( totalProducts - productInfos[5])
            setQuantityProducts(quantityProducts - productInfos[4])
        }
    }

    return (
        <div className="row mb-2 row-cols-1 row-underline product-details" >
        <div className="col-3 px-0">
            <div className="row row-cols-1">
                <div className="pe-0">
                    <img src={productInfos[6]} className="" alt="illustration of the COSRX product" width="50px"/>
                </div>
            </div>
        </div>
        <div className="col-3 d-flex flex-column justify-content-center px-0 py-1 ">
            <div className="cart-product-title"><p className="mb-1">{productInfos[1]}</p></div>
            <div><p className="mb-1">{productInfos[2]}</p></div>
        </div>
        <div className="col-2 d-flex justify-content-center py-1 px-1 ">
            <p><span>{productInfos[3]}</span>$</p>
        </div>
        <div className="col-2 d-flex justify-content-center py-1 ps-1 pe-2 update-quantity-el">
            <div className="d-flex align-items-start">
                <div className="add-quantity" onClick={handleAddProduct}>+</div>
                <span id="btn-update-quantity">
                    {productInfos[4]}
                </span>
                <div className="remove-quantity"  onClick={handleRemoveOneQtyProduct}>-</div>
            </div> 
        </div>
        <div className="col-2 px-2 py-1">
            <div className="row d-flex justify-content-start">
                <p><span>{productInfos[5]}</span>$</p>
            </div>
            <div className="row d-flex justify-content-end">
                <button type="button" onClick={handleRemoveProduct}>
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </div>
    </div>
    );
};

export default CatalogueCartDetailProduct;