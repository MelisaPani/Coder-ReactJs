import React, {useEffect, useState}from "react";
/* import ItemCount from "./itemCount"; */
import ItemDetailCointener from "./ItemDetailContainer";
import ItemList from "./ItemList";
import { products } from "../utils/products"


const ItemListContainer =({gretting}) =>{
    const [items, setItems] = useState([]);
    useEffect(() => {
      const getProducts = () =>
          new Promise((res, rej) => {
              setTimeout(() => {              
                  res(products);
              }, 2000);
          });

      getProducts()
          .then((data) => {
              setItems(data);
          })
          .catch((error) => {
              console.log(error);
          });
  }, []);

 


/*      const onAdd = (quantity) =>{
        console.log(`Agregaste ${quantity} unidades al carrito`)
    } */


    return(
        <div className="listContainer">
            <div className="ejercicios">
           {/*  <h1>{gretting}</h1> */}
        {/*     <ItemCount initial={1} stock={5} onAdd={onAdd} /> */}
            </div>
            <ItemList items={items}/> 
           
            <ItemDetailCointener/>
           
        </div>
    )
}

export default ItemListContainer;