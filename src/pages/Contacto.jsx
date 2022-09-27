import React from "react";
import astroRocket from "../../src/assets/images/astroconta.png"

const Contacto =() =>{
    return(
        <div className="contacto" data-aos="fade-up">  
            <div className="contenido__top" data-aos="fade-up">
                <h2 className="fw-bold" > Contacto</h2>
                <p>Envianos tu consulta por medio de nuestro formulario de contacto y te responderemos a la brevedad.</p> 
            </div>

            <div className="contactoRocket">
                <img src={astroRocket} alt="astroRocket" />
            </div>

            <form className="formsContacto" >

                <label class="d-block" for="username">Nombre y Apellido:</label>       
                <input class="d-block" type="text" id="username" name="nombre" placeholder="Cual es tu nombre?" required></input>

                <label for="email" className="d-block">Correo electronico:</label>     
                <input name= "email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required></input>

                <input type="text" name="subject" placeholder="Asunto a tratar..." title="El Asunto es requerido" required></input>
                
                <textarea name= "message"class="comentario form-control" placeholder="Escribe tu consulta" id="floatingTextarea" required></textarea>   
                
            
                <button id= "FormButton" class= "submitButton" type="submit"> Enviar </button> 

            </form>
        
        
        </div>
    )
}

export default Contacto; 