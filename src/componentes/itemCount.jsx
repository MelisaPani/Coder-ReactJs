import React,{useEffect, useState} from "react";



const ItemCount = ({initial, stock, onAdd}) => {
    const [count,setCount] =useState(parseInt(initial));

    const decrease = () =>{
        count > 0 && setCount(count-1)
    }

    const increase = () =>{
       count <= stock && setCount(count+1)
    }

    useEffect(() =>{
        setCount(parseInt(initial))
    }, [initial])

  

    return(
        <div className="counter">
       
            <div className="controles">
            <button  disabled= {count <=1} onClick={decrease}>-</button>
            <p>{count}</p>
            <button  disabled= {count >= stock} onClick={increase}>+</button>
            </div>
            <button disabled={stock<=0} onClick={() => onAdd(count)} className="buttonItemDetail"> Agregar al Carrito</button>
        
        </div>
    )
}

export default ItemCount