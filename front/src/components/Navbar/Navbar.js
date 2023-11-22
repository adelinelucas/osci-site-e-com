import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar" style={{backgroundColor:"var(--light-blue-ara)", textDecoration:"none", justifyContent:"space-evenly", width:"100%",position: 'sticky', top: 0, zIndex: 1000}}>
            <NavLink style={{textDecoration:"none", color:"white", fontWeight:"bold"}} to={'/'}>🏠 Home</NavLink>
            <NavLink style={{textDecoration:"none", color:"white", fontWeight:"bold"}} to={'/catalogue'}>📚 Catalogue</NavLink>
            <NavLink style={{textDecoration:"none", color:"white", fontWeight:"bold"}} to={'/panier'}>🛒 Cart</NavLink>
            <NavLink style={{textDecoration:"none", color:"white", fontWeight:"bold"}} to={'/checkout'}>✅ Checkout</NavLink>
        </nav>
    );
};

export default Navbar;
