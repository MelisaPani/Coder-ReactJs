import React from "react";

const Item = ({Item}) =>{
    return (
    
        <div className="item-container" >
            <div className="item-img">
                <img src= {Item.img} alt={Item.title}/>
            </div>
            <div className="itemTitle">
                <h2>{Item.title}</h2>
                <h3>${Item.price}</h3>
            </div>
            <div className="verDetalle">
                <button className="buttonItem">Ver detalle</button>
            </div>
            <div className="stockDispo">
                <p>Stock disponible: {Item.stock}</p>
            </div>
            
        </div>

    )
}

export default Item;