import React from "react";
import { useState } from "react";
import Form from "./Form";
import pagoOk from "../assets/images/astroOk.png"
import { Link} from "react-router-dom";


const Checkout =() =>{
    const[orderId, setOrderId] = useState ("");

    const handleId = (numeroDeOrden) =>{
        setOrderId(numeroDeOrden)
    }

    if(orderId){
        return (            
            <div className="graciasCompra"> 
                <div className="pagoOk">
                    <p className="speech-bubble" >Gracias por tu compra !!</p>
                    <img src={pagoOk} alt="pago aceptado" />
                </div>
               
                <h4 className="seguimiento"> ✔ Te dejamos el numero de seguimiento  : {orderId}</h4>

                <Link to="/"><button className="irHome"> Ir a Home</button></Link>
           
            
            </div>
        )
    }
    
    return(
        <div className="formCheck" data-aos="fade-up">

            <p className="confirmaTuCompra"> CONFIRMA TU COMPRA</p>
            <Form handleId ={handleId}/>           
        
        </div>

    )
}

export default Checkout;