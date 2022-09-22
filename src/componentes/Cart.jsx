import React from "react";
import { Link} from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCart from "./ItemCart";
import planets from "../assets/images/planet3.png"

const Cart = () =>{
    const { cart, totalPrice, clearCart} = useCartContext();

    if (cart.length === 0){
    return (
        <div className="cartEmpty">
        <p>El Carrito esta Vacio  </p>
        <Link to="/"> <button className="goShopping"> Go Shopping! </button> </Link>
        </div>
    );
    }
    
    return(

        <div className="cart" data-aos="fade-up">
            <img className="cartplanets" src={planets} alt="planets" />
            <div className="cartMap">
                <p className="uCart"> Tu Carrito</p> 
           
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
             <span className="jam jam-trash" onClick={(clearCart)}> Vaciar carrito</span>
            </div>

            <div className="checkout">
            <p className="shipping"> ENVIO GRATIS!</p>
            <p className="totalCompra"> Total de tu compra: ${totalPrice()}</p>
            <button className="finCompra"> GO TO CHECKOUT</button>
            </div>
            
           
        </div>
    )
}


export default Cart; 