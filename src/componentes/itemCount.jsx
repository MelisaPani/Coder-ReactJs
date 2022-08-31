import React,{useEffect, useState} from "react";


const ItemCount = ({initial, stock, onAdd}) => {
    const [count,setCount] =useState(parseInt(initial));

    const decrease = () =>{
        setCount(count - 1);
    }

    const increase = () =>{
        setCount(count + 1);
    }

    useEffect(() =>{
        setCount(parseInt(initial))
    }, [initial])

    return(
        <div className="counter">
            <p> Moon Lamp</p>
            <div className="controles">
            <button disabled= {count <=1} onClick={decrease}>-</button>
            <p>{count}</p>
            <button disabled= {count >= stock} onClick={increase}>+</button>
            </div>
            <button disabled={stock<=0} onClick={() => onAdd(count)} className="addToCart"> Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount