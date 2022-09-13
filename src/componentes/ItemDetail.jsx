import React from "react";
import ItemCount from "./itemCount";


 const ItemDetail =({item}) =>{
     const onAdd = (quantity) =>{
        console.log(`Agregaste ${quantity} unidades al carrito`)
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
                <span className="jam jam-thunder">ENVIOS A TODO EL PAÍS</span>           
                <p className="cantidad">Cantidad: {item.stock} </p> 
                 <ItemCount initial={1} stock={item.stock}  onAdd={onAdd}  /> 
        </div>      
    </div>
    
    )
}

export default ItemDetail;