import React from 'react';
import './style.css';

const Header = () => {
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
                            <i className="bi bi-heart"></i>
                        </button>
                    </div>
                    <div className="col"> 
                        <button className="icon-link icon-link-hover position-relative" data-bs-toggle="offcanvas" href="#offproductorder" role="button" aria-controls="offproductorder">
                            <div className="" id="numCartItems"></div>
                            <i className="bi bi-bag-fill"></i>
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
                <div className="offcanvas offcanvas-start flex-md-column align-items-md-start flex-md-grow-0" id="navbarSupportedContent" aria-labelledby="offcanvasNavbarLabel" tabindex="-1">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title m-auto" id="navbarSupportedContent">
                            <img className="offcanvas-logo" src="./images/logo-transparent-bg.png" alt="ARA, cosmetic brand for all skins."/>
                        </h5>
                        <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body flex-md-row-reverse">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item my-3 ml-1">
                                <a className="nav-link active" aria-current="page" href="#" data-category="all">All products</a>
                                <div className="separator"></div>
                            </li>
                            <li className="nav-item my-3 ms-1">
                                <a className="nav-link" href="#" data-category="cleansers">Cleansers</a>
                                <div className="separator"></div>
                            </li>
                            <li className="nav-item my-3 ms-1 ms-md-2">
                                <a className="nav-link" href="#" data-category="moisturizes">Moisturizes</a>
                                <div className="separator"></div>
                            </li>
                            <li className="nav-item my-3 ms-1 ms-md-2">
                                <a className="nav-link" href="#" data-category="suncare">Suncare</a>
                                <div className="separator"></div>
                            </li>
                            <li className="nav-item my-3 ms-1 ms-md-2">
                                <a className="nav-link" href="#" data-category="men">Men's</a>
                                <div className="separator"></div>
                            </li>
                        </ul>
                    </div>  
                </div>
                {/* NAVBAR CONTENT */}
                {/* SEARCH BAR CONTENT */}
                <div className="offcanvas offcanvas-search-bar offcanvas-start justify-content-center" tabindex="-1" id="searchBarContent" aria-labelledby="Toggle navigation">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title m-auto" id="searchBarContentTitle">
                            <img className="offcanvas-logo" src="./images/logo-transparent-bg.png" alt="ARA, cosmetic brand for all skins."/>
                        </h5>                          
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
                    </div>
                    <div className="offcanvas-body">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Looking for a products" aria-label="Search" id="search-input" data-type="input"/>
                            <button className="btn btn-outline-light text-light" id="search-button" data-type="btn">
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