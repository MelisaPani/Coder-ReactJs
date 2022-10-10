import React from "react";
import Item from "./Item";


const ItemList =({items =[]}) =>{
    return(

    
      items.map(products => <Item key={products.id} Item={products}/>) 
       
    );
}

export default ItemList;