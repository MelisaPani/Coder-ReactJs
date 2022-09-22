import React from "react";
import planeta from "../../assets/images/planet.png";
import lego from "../../assets/images/astrolego.png"

const Presentacion = () =>{
    return(
        
        <div className="presentacion">

        <h1 className="intro">IMPRESIONES 3D</h1>
        <p className="introP">Conoce nuestro Productos</p>
        <img className="planet" src={planeta} alt="planet" />
        <img className="astrolego" src={lego} alt="astrolego" />

        
                  
        </div>
        
    )
}

export default Presentacion; 