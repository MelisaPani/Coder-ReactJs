import React from "react";
import { useCartContext } from "../context/CartContext";

const ItemCart = ({product}) =>{
 const{ removeProduct } = useCartContext ();
return(
    <div className="itemCart">
        <img src={product.img} alt={product.title} />
    
        <p>{product.title}</p>
        <p>Cantidad U. {product.quantity}</p>
        <p>Precio: {product.price}</p>
        <p>Subtotal: $ {product.quantity * product.price}</p>
        <button onClick={() => removeProduct(product.id)}>Eliminar</button>
    </div>
)


}

export default ItemCart