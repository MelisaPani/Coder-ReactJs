import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./itemCount";


 const ItemDetail =({item}) =>{
 const [add,setAdd] =useState(false)

     const onAdd = (quantity) =>{
        setAdd(!add)
        console.log(`agregaste ${quantity}`)
    } 


return (

    <div className="item-containerDetail " data-aos="fade-up">
        <div className="item-imgDetail">
            <img src= {item.img} alt={item.title}/>
            <p className="descripcion"> {item.descripcion}</p>
            <img className="imgRecicle"src="https://d2r9epyceweg5n.cloudfront.net/stores/987/679/rte/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(8).png" alt="recycler" />
        </div>
        <div className="itemTitleDetail">
                <h2>{item.title}</h2>
                <h3>${item.price}</h3>
                <span className="jam jam-thunder">ENVIOS GRATIS A TODO EL PAÍS</span>           
                <p className="cantidad">Cantidad: {item.stock} </p> 

                {
                    add ?
                <div className="agregado"> 
                    <p>Agregado!! </p>
                    <div className="compra">
                    <Link className="seguirComprando" to="/">
                    <button> <span className="jam jam-arrow-square-left-f"></span>Seguir comprando</button>
                    </Link>
                    <Link className="finalizarCompra" to="/Cart">
                    <button>Finalizar compra<span className="jam jam-arrow-square-right-f"></span></button>
                    </Link>
                    
                   </div>

                </div>
                    
                    :
                     <ItemCount initial={1} stock={item.stock}  onAdd={onAdd}  /> 
                }
        </div> 
        <div>
       </div>     
    </div>
    
)
}

export default ItemDetail;