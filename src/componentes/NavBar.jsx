import React from "react";
import CartWidget from "./CartWidget";
import logo from "../assets/images/logogalaxy2.png";
import { NavLink } from "react-router-dom";

const NavBar =() =>{
    return(
    <div className="navBar"> 
    <ul className="nav">
        <li className="nav-item">
            <img src={logo}  alt="3D"/>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to ="/">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to ="/contacto">Contacto</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <div className="dropdown-center">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias </button>
            <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item navItem" to="/categoria/Astronautas">Astronautas</NavLink></li>
                <li><NavLink className="dropdown-item navItem" to="/categoria/Planets">Planets</NavLink></li>
            </ul>
        </div>
    </ul>

        <CartWidget/> 
    </div>
    )
}

export default NavBar;