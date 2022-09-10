import React,{useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../utils/products"


const ItemDetailCointener =() => {
const [item, setItem] =useState({});
useEffect(() => {
    const getProduct = () =>
    new Promise((res, rej) => {
        setTimeout(() => {
        const product = products.find((prod) => prod.id === 1);
             res(product);
        }, 2000); 
        
        });

    getProduct()
        .then((data) => {
            setItem(data);
        })
        .catch((error) => {
            console.log(error);
        });
}, []);


    return(

        <div className="itemDetail">
        <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailCointener;