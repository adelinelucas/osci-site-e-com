import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                    <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to={'/home'}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to={'/catalogue'}>Catalogue</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/panier'}>Panier</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/checkout'}>Checkout</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;