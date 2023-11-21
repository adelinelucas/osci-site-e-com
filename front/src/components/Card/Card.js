import React, { useEffect, useState } from 'react';
import './style.css';
import {useCatalogueContext} from '../../contextes/CatalogueContext';
import {useCartContext} from '../../contextes/CartContext';
import { ToastContainer, toast } from 'react-toastify';

const Card = ({productInfos}) => {
    // import des contextes
    const {favouritesList,setFavouritesList, setPopInModalMessage, setPopInModalDisplay} = useCatalogueContext();
    const {productsList,setProductsList, setTotalProducts, setQuantityProducts, totalProducts, quantityProducts} = useCartContext();
    // console.log(productInfos)
    //
    const productID = productInfos._id;
    const [favouriteCSS, setFavouriteCSS] = useState('bi bi-heart add-product-to-favorite')

    // useEffect(()=>{console.log(productsList)}, [productsList])
    // HANDLE FAVOURITE 
    const handleFavourite =(e) =>{
        // renvoyer un object avec l'id produit 
        if(favouritesList.length === 0) {
            setFavouritesList([...favouritesList, productID])
            setPopInModalDisplay(true)
            setPopInModalMessage({message:'Product added to your favourite !', icon:'bi bi-heart-fill'})
        }
        else{
            if(favouritesList.includes(productID)){
                let favourtieListFiltered = favouritesList.filter((fav) =>fav !==productID)
                setFavouritesList(favourtieListFiltered)
                setFavouriteCSS('bi add-product-to-favorite bi-heart')
            }
            else{
                setFavouritesList([...favouritesList, productID])
                setPopInModalDisplay(true)
                setPopInModalMessage({message:'Product added to your favourite !', icon:'bi bi-heart-fill'})
                
            }
        }        
    }

    // vérifier si le produit est dans la liste des favoris pour ajouter la couleur
    const checkProductAddInFavourite=() =>{
        favouritesList.map((favourite)=>{
            if(favourite === productID) setFavouriteCSS('bi add-product-to-favorite bi-heart-fill')
        })
    }

    useEffect(()=>{
        checkProductAddInFavourite()
    }, [favouritesList])
    
    // 

    // HANDLE ADD / REMOVE PRODUCT TO CART 
        const handleAddProductToCart= () =>{
            if(productsList.length > 0){
                // check if id product is in productsList array
                let isProductInCart = productsList.filter((product)=>product[0] === productID)

                if( isProductInCart.length > 0){
                    // si produit déja dans panier, changer la quantité et le prix total du produit
                    let productsListUpdated = productsList.map((product) =>{
                        if(product[0] === productID) {
                            product[4] ++;
                            product[5] += productInfos.price
                        }
                        return product
                    })
                    // je modifie mon context 
                    setProductsList(productsListUpdated)
                    setTotalProducts( totalProducts + productInfos.price)
                    setQuantityProducts(quantityProducts + 1)
                }
                else{
                    // on ajoute le produit dans le panier
                    let id = productID;
                    let title  = productInfos.title;
                    let resume  = productInfos.resume;
                    let price  = productInfos.price;
                    let quantity  = 1;
                    let totalPrice  = productInfos.price;
                    let image = productInfos.img;
                    setProductsList([...productsList, [id, title, resume, price, quantity,totalPrice, image]])
    
                    // mettre à jour le total du panier
                    setTotalProducts( totalProducts + productInfos.price)
                    // mettre à jour la quantité total du panier
                    setQuantityProducts(quantityProducts + 1)
                }
            }
            else{
                    // on ajoute le produit dans le panier
                    let id = productID;
                    let title  = productInfos.title;
                    let resume  = productInfos.resume;
                    let price  = productInfos.price;
                    let quantity  = 1;
                    let totalPrice  = productInfos.price;
                    let image = productInfos.img;

                    setProductsList([...productsList, [id, title, resume, price, quantity, totalPrice, image]])

                    // mettre à jour le total du panier
                    setTotalProducts( totalProducts + productInfos.price)
                    // mettre à jour la quantité total du panier
                    setQuantityProducts(quantityProducts + 1)
            }
            setPopInModalDisplay(true)
            setPopInModalMessage({message:'Product added to your cart !', icon:'bi bi-bag-heart-fill'})          
        }

        const handleRemoveProductToCart= () =>{
            if(productsList.length > 0){
                // check if id product is in productsList array
                let isProductInCart = productsList.filter((product)=>product[0] === productID)

                if( isProductInCart.length > 0){
                    // si produit déja dans panier, changer la quantité et le prix total du produit
                    let productsListUpdated = productsList.map((product) =>{
                        if(product[0] === productID) {
                            product[4] --;
                            product[5] -= productInfos.price
                        }
                        return product
                    })
                    setProductsList(productsListUpdated.filter((product) => product[4]>0))
                    setTotalProducts( totalProducts - productInfos.price)
                    setQuantityProducts(quantityProducts - 1)
                }
            }
        }
    //

    return (
        <article className="main__product__card card mb-md-5 mb-3 mt-3 border-0" style={{maxWidth: '540px'}} data-productid="product_id">
            <div className="row row-cols-2 g-0">
                <div className="col-5 main__product__card__bg d-flex align-items-center h-75">
                    <img src={productInfos.img} className="card-img-top" alt={productInfos.title + '-' + productInfos.resume} />                
                </div>
                <div className="col-7 main__product__card__infos">
                    <div className="card-body">
                        <h5 className="card-title fw-bolder"><span className="title">{productInfos.title}</span><span className="resume"> - {productInfos.resume}</span></h5>
                        <p className="card-text">{productInfos.description.slice(0,150)}...</p>
                    </div>
                    <div className="main__card__prices-infos card-body row row-cols-2 justify-content-end p-0 ">
                        <p className="text-end w-auto"><span className="current-price text-decoration-line-through">{productInfos.oldPrice}</span>$</p>
                        <p className="w-auto"><span className="current-price text-danger">{productInfos.price}$</span></p>
                    </div>
                    <div className="main__card__product-actions card-body row p-1">
                        <div className="col-8">
                            <div className="row justify-content-evenly">
                                <div className="col-2">
                                    <button className="btn btn-light bg-white rounded-pill border-dark" >1</button>
                                </div>
                                <div className=" col-2">
                                    <button className="btn btn-light bg-white add-product add-product-to-cart"  onClick={handleAddProductToCart}>+</button>
                                </div>
                                <div className=" col-2">
                                    <button className="btn btn-light bg-white text-dark remove-product remove-product-to-cart"  onClick={handleRemoveProductToCart}>-</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div>
                                <button className="icon-link icon-link-hover link--maroon-ara" onClick={handleFavourite}>
                                    <i className={favouriteCSS}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>   
    );
};

export default Card;