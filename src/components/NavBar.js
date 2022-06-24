import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, MenuItem } from "semantic-ui-react"

function NavBar({cart}){
    return (
        <Menu fluid widths={5} size='massive'>
            <MenuItem as={NavLink} exact to='/' className="button" activeStyle={{color: "red"}}>Home</MenuItem>
            <MenuItem as={NavLink} to='/beers' className="button" activeStyle={{color: "red"}}>Browse Beer</MenuItem>
            <MenuItem as={NavLink} to='/addbeer'className="button" activeStyle={{color: "red"}}>Add Beer</MenuItem>
            <MenuItem as={NavLink} to='/checkout'className="button" activeStyle={{color: "red"}}>Checkout ({cart.length})</MenuItem>
            <MenuItem as={NavLink} to='/closetab'className="button" activeStyle={{color: "red"}}>Close Tab</MenuItem>
        </Menu> 
    )
}

export default NavBar;