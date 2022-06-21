import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div className="navbar">
            <NavLink to='/' className="button">home</NavLink>
            <NavLink to='/beers' className="button">beers</NavLink>
            <NavLink to='/checkout'className="button">checkout</NavLink>
        </div>
    )
}

export default NavBar;