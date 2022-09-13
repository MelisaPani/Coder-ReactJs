import React,{useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../utils/products";
import { useParams } from "react-router-dom";


const ItemDetailCointener =() => {
const [item, setItem] =useState({});
const {itemId} = useParams();

useEffect(() =>{
    const getProduct = new Promise(resolve =>{
        setTimeout(() =>{
            resolve (products);
        },100);
    });

    getProduct.then(res => setItem(res.find(product =>product.id === parseInt(itemId))));
},[itemId]);




    return(

        <div className="itemDetail">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailCointener;