import React, {useEffect, useState}from "react";
import ItemList from "./ItemList";
import { products } from "../utils/products";
import { useParams } from "react-router-dom";


const ItemListContainer =() =>{
    const [items, setItems] = useState([]);

    const{ categoriaId } = useParams ()

    useEffect(() =>{
        const getItems = new Promise (resolve => {
            setTimeout(() =>{
                resolve(products);
            },200);
        });
        if(categoriaId){
            getItems.then(res => setItems(res.filter (Astronautas => Astronautas.category === categoriaId)));
            }else {
                getItems.then(res => setItems(res))
            }
       
    },[categoriaId])

 
    return(
        <div className="listContainer">
            <ItemList items={items}/>         
        </div>
    )
}

export default ItemListContainer;