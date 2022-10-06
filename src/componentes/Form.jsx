import React, { useState} from "react";
import { useCartContext } from "../context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Swal from 'sweetalert2';


const Form =({handleId}) =>{
    const {cart, totalPrice,clearCart} =  useCartContext();
    const [nombre, setNombre] = useState ("");
    const [email, setEmail] = useState ("");
    const [telefono, setTelofono] = useState ("");


    const sendOrder =() =>{
        if((nombre !== "") && (email !== "") && (telefono!=="")){
        const buyer = {name:nombre, email:email, phone:telefono};
        const items =[];
        cart.forEach((item) =>{
            items.push({id:item.id, title:item.title, price:item.price, quantity: item.quantity});
            Swal.fire({
                position: 'center',
                icon: 'success',
                iconColor: '#A8F72E',
                title: 'Tu orden fue enviada',
                text:'Procesando pago',
                showConfirmButton: false,
                timer: 1000,
                background:'url(https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80)',
                color:'white',
              })
        });

        const order = {buyer:buyer,date:new Date(), items:items,total:totalPrice()}
     

       const db = getFirestore();
       const orderCollection = collection(db, "orders");
       addDoc(orderCollection, order).then ((res) => {
       handleId(res.id);
       clearCart()
        
       });

    }

    }
    return(
       
        <div className="pedidoCheck">
            <form >
            <input type="text" name="nombre" placeholder="Ingresa tu nombre" onChange={(e) =>setNombre(e.target.value)} required/>
            <input type="email" placeholder="Ingrea tu Email" id="email"  onChange={(e) =>setEmail(e.target.value)} required/>
            <input type="number" placeholder="Ingrea tu telefono"  onChange={(e) =>setTelofono(e.target.value)} required/>
            <button  type="button" onClick={() => sendOrder()}> Generar Orden</button>
            </form>

       
        <div className="resumenCompra">
            <p className="detalle"> Detalle </p>
            {cart.map ( carrito =>{
                 return(
                    <div className="formCart" key={carrito.id}> 
                        <img className="imgCheckout" src={carrito.img} alt={carrito.title} />
                        <p> x {carrito.quantity} {carrito.title}</p>
                        <p className="FormPrecio"> $ { carrito.price * carrito.quantity}</p>
                    </div>)}
             )
             }

            <div className="checkoutTotal">
                <p>TOTAL : $ { totalPrice()}</p>
            </div>
    
        </div>

        </div>
        
    )
}



export default Form;