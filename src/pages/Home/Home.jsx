import React from "react";
import ItemListContainer from "../../componentes/ItemListContainer";
import Presentacion from "./Presentacion";

const Home  = () =>{
    return(
        <div className="font-light" data-aos="fade-up">
            <Presentacion/>
            <ItemListContainer/>
        </div>

        
    )
}

export default Home; 