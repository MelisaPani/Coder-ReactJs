import React from "react";
import { Link} from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";

const Cart = () =>{
    const { cart, totalPrice} = useCartContext();

    if (cart.length === 0){
    return (
        <div className="cartEmpty">
        <p>El Carrito esta Vacio  </p>
        <Link to="/"> <button className="goShopping"> Go Shopping! </button> </Link>
        </div>
    );
    }
    
    return(

        <div className="cart">
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p> Total: {totalPrice()}</p>
        </div>
    )
}


export default Cart; 