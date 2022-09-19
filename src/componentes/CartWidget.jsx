import React from "react";
import { Link} from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const CartWidget = () =>{
    const {totalProducts} =useCartContext();
    return(
            <div className="cartwidget">
               
            <Link to="/cart" style={{ textDecoration: 'none' }}><span className="jam jam-shopping-cart" ></span></Link>
            <p className="contador">{totalProducts()||``}</p>
            </div>
    )
}

export default CartWidget;