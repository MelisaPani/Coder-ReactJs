import React,{useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc} from "firebase/firestore";
/* import { products } from "../utils/products"; */
import { useParams } from "react-router-dom";


const ItemDetailCointener =() => {
const [item, setItem] =useState({});
const {itemId} = useParams();


useEffect (() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "products", itemId);
    getDoc(queryDoc)
    .then(res => setItem({id: res.id, ...res.data()}))

},[itemId])


    return(

        <div className="itemDetail">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailCointener;