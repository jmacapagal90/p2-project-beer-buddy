import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div className="navbar">
            <NavLink to='/' className="button">Home</NavLink>
            <NavLink to='/beers' className="button">Beers</NavLink>
            <NavLink to='/addbeer'className="button">Add New Beer</NavLink>
            <NavLink to='/checkout'className="button">Checkout</NavLink>
            
        </div>
    )
}

export default NavBar;