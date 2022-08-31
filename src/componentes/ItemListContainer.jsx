import React from "react";
import ItemCount from "./itemCount";

const ItemListContainer =({gretting}) =>{

    const onAdd = (quantity) =>{
        console.log(`Agregaste ${quantity} unidades al carrito`)
    }


    return(
        <div className="listContainer">
            <h1>{gretting}</h1>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer