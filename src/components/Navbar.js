import React from "react";
import logo from "../assets/tessera 2.png"

function Navbar() {

    return (
        <div className="navbar">
            <img src={logo}></img>
            <div className="menu">
                <div className="menu-item">About us</div>
                <div className="menu-item">Service</div>
                <div className="menu-item">Product</div>
                <div className="menu-item">Premium</div>
            </div>
        </div>
    )
}

export default Navbar;