import React, {useEffect, useState}from "react";
import ItemCount from "./itemCount";
import ItemList from "./ItemList";


const products = [
{id: 1, img: "https://i.postimg.cc/D0Y6KRsp/product1.png", title: "Astronaut Hurra", stock:20, price: 600,},
{id: 2, img: "https://i.postimg.cc/0j3Y4DRL/product2.png", title: "Astronaut Skate", stock:50, price: 800,},
{id: 3, img: "https://i.postimg.cc/6qTVzzSr/product3.png", title: "Astronaut Pot", stock:10, price: 1000,},
{id: 4, img: "https://i.postimg.cc/ZRwFrXfY/product4.png", title: "moon Lamp", stock:50, price: 1200,},
{id: 5, img: "https://i.postimg.cc/fLzfSMfg/product5.png", title: "Astronaut cloud Lamp", stock:20, price: 1500,},
{id: 6, img: "https://i.postimg.cc/661fTJ2Y/product6.png", title: "Rocket Lamp", stock:20, price: 1400,}

]


const ItemListContainer =({gretting}) =>{
   const [items, setItems] = useState([]); 

   useEffect(()=>{
        const getItems= new Promise (resolve =>{
        setTimeout (() =>{
        resolve(products);
        }, 2000)
        });
        getItems.then(res => setItems(res));

    },[])



     const onAdd = (quantity) =>{
        console.log(`Agregaste ${quantity} unidades al carrito`)
    }


    return(
        <div className="listContainer">
            <div className="ejercicios">
            <h1>{gretting}</h1>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            </div>
            <ItemList items={items}/> 

          

        </div>
    )
}

export default ItemListContainer;