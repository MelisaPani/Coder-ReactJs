import React, {useEffect, useState}from "react";
import ItemList from "./ItemList";
import { getFirestore, collection, getDocs, query, where} from "firebase/firestore"
import { useParams } from "react-router-dom";


const ItemListContainer =() =>{
    const [items, setItems] = useState([]);
    const{ categoriaId } = useParams ();



    useEffect(() => {
      
            const querydb = getFirestore();
            const quereyCollection = collection (querydb, "products");
           
           
            if (categoriaId){
                const queryFilter = query (quereyCollection, where ("category", "==", categoriaId))
                getDocs(queryFilter)
                .then (res => setItems( res.docs.map(product => ({id: product.id, ...product.data() }))));
               
            } else {
                getDocs(quereyCollection)
                .then (res => setItems( res.docs.map(product => ({id: product.id, ...product.data() }
                )))); 
              
            }
               
    }, [categoriaId,])
   

 
    return(
        <div className="listContainer">
            <ItemList items={items}/>    
        </div>
    )
}

export default ItemListContainer;