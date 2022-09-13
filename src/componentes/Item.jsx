import React from "react";
import { Link } from "react-router-dom";

const Item = ({Item}) =>{
    return (
    
        <div className="item-container" data-aos="fade-up">
            <div className="item-img">
                <img src= {Item.img} alt={Item.title}/>
            </div>
            <div className="itemTitle">
                <h2>{Item.title}</h2>
                <h3>${Item.price}</h3>
            </div>
            <div className="verDetalle">
                <Link to={`/item/${Item.id}`} className="buttonItem">Ver detalle</Link>
            </div>
            <div className="stockDispo">
                <p>Stock disponible: {Item.stock}</p>
            </div>
            
        </div>

    )
}

export default Item;