import React from "react";
import { useCartContext } from "../context/CartContext";

const ItemCart = ({product}) =>{
 const{ removeProduct,} = useCartContext ();
return(
    <div className="itemCart">
        <img src={product.img} alt={product.title} />
    
        <p>{product.title}</p>
        <p>Seleccionaste {product.quantity} unidad</p>
        <p>Precio: {product.price}</p>
        <p>Subtotal: $ {product.quantity * product.price}</p>
        <span className="jam jam-trash-f" onClick={() => removeProduct(product.id)}></span>

    </div>
)


}

export default ItemCart