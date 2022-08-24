import React from "react";
import logo from "./images/logogalaxy2.png"

const Header =() =>{
    return(
    <div className="navBar"> 
        <ul className="nav">
        <li className="nav-item">
            <img src={logo}  alt="3D"/>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Tienda</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Login</a>
        </li>
        </ul>

    </div>
    )
}

export default Header;