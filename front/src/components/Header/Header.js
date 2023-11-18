import React, {useState, useEffect} from 'react';
import './style.css';
import Categories from '../Categories';
import {useCatalogueContext} from '../../contextes/CatalogueContext';
import {useCartContext} from '../../contextes/CartContext';

const Header = () => {
    // import des contextes
    const {setSearchProducts,searchProducts, favouritesList} = useCatalogueContext();
    const {quantityProducts} = useCartContext();
    // 

    const [favouriteCSS, setFavouriteCSS] = useState('bi bi-heart add-product-to-favorite')
    const [productsInCartCSS, setProductsInCartCSS] = useState('bi bi-bag-fill')
    const [numFavouriteProduct,setNumFavouriteProduct ] = useState(0)

    useEffect(()=>{
        favouritesList.length > 0 ?  setFavouriteCSS('bi add-product-to-favorite bi-heart-fill') : setFavouriteCSS('bi bi-heart add-product-to-favorite');
        setNumFavouriteProduct(favouritesList.length)
    }, [favouritesList])

    useEffect(()=>{
        quantityProducts > 0 ?  setProductsInCartCSS('bi bi-bag-fill duck-blue') : setProductsInCartCSS('bi bi-bag-fill');
        console.log(quantityProducts)
    }, [quantityProducts])
    
    return (
    <header className="header container">
        <nav className="navbar navbar-expand-md bg-white row flex-row-reverse w-100 m-auto">
            <div className="col-6 d-flex align-items-center justify-content-md-between">
                <div className="header__title d-flex align-items-center navbar-brand">
                    <h1>ARA - Beauty</h1>
                    <img src="./images/logo-transparent-bg.png" alt="ARA, cosmetic brand for all skins."/>
                </div>
                <div className="header__products__actions row row-cols-2">
                    <div className="col">
                        <button className="icon-link icon-link-hover link--maroon-ara position-relative">
                            <div className="" id="numFavouriteItems"></div>
                            <i className={favouriteCSS}>
                                <span className='header__products__actions_favourite_num'>{numFavouriteProduct >0 ? numFavouriteProduct : ''}</span>
                            </i>
                        </button>
                    </div>
                    <div className="col"> 
                        <button className="icon-link icon-link-hover position-relative" data-bs-toggle="offcanvas" href="#offproductorder" role="button" aria-controls="offproductorder">
                            <div className="" id="numCartItems"></div>
                            <i className={productsInCartCSS}>
                                <span>{quantityProducts > 0 ? quantityProducts : ''}</span>
                            </i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="header__menu__and__search col-3 col-md-6">
                <div className="header__menu__and__search buttons row row-cols-2 flex-lg-row-reverse">
                    {/* BUTTON TARGET NAVBAR */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="d-flex justify-content-center">
                            <span className="navbar-toggler-icon"></span>
                        </div>
                    </button>
                    {/* END BUTTON TARGET NAVBAR */}
                    {/* BUTTON TARGET SEARCH BAR */}
                    <button className="search-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#searchBarContent" aria-controls="searchBarContent" aria-expanded="false" aria-label="Toggle search bar"
                    >
                        <i className="bi bi-search"></i>
                    </button>
                    {/* END BUTTON TARGET SEARCH BAR */}
                </div>
                {/* NAVBAR CONTENT */}
                <div className="offcanvas offcanvas-start flex-md-column align-items-md-start flex-md-grow-0" id="navbarSupportedContent" aria-labelledby="offcanvasNavbarLabel" tabIndex="-1">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title m-auto" id="navbarSupportedContent">
                            <img className="offcanvas-logo" src="./images/logo-transparent-bg.png" alt="ARA, cosmetic brand for all skins."/>
                        </h5>
                        <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body flex-md-row-reverse">
                        <Categories />
                    </div>  
                </div>
                {/* NAVBAR CONTENT */}
                {/* SEARCH BAR CONTENT */}
                <div className="offcanvas offcanvas-search-bar offcanvas-start justify-content-center" tabIndex="-1" id="searchBarContent" aria-labelledby="Toggle navigation">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title m-auto" id="searchBarContentTitle">
                            <img className="offcanvas-logo" src="./images/logo-transparent-bg.png" alt="ARA, cosmetic brand for all skins."/>
                        </h5>                          
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
                    </div>
                    <div className="offcanvas-body">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Looking for a products" aria-label="Search" id="search-input" data-type="input" value={searchProducts} onChange={(e)=>setSearchProducts((e.target.value).toLowerCase())}/>
                            <button className="btn btn-outline-light text-light" id="search-button" data-type="btn" >
                                <i className="bi bi-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
                {/* SEARCH BAR CONTENT */}
            </div>
        </nav>
    </header>
    );
};

export default Header;