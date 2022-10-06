import React, { useRef } from 'react';
import astroRocket from "../../src/assets/images/astroconta.png";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useState } from 'react';


const Contacto =() =>{
    const [pendiente, setPendiente] = useState (false);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      setPendiente(true);
  
      emailjs.sendForm('service_s114gnn', 'template_6w0vpn7', form.current, 'KRcO9Qz6uflU0Dytr')
        .then((result) => {
            setPendiente(false);
            console.log(result.text);
            Swal.fire({
                position: 'center',
                icon: 'success',
                iconColor: '#A8F72E',
                title: 'Hemos enviado tu consulta',
                text:'Te responderemos enseguida ',
                showConfirmButton: true,
                background:'black',
                color:'white',
              })
              form.current.reset();
        }, (error) => {
            setPendiente(false);
            console.log(error.text);
            Swal.fire({
                position: 'center',
                icon: 'error',
                iconColor: '#F50D0E',
                title: 'Oops!',
                text:'Tuvimos un problema al enviar tu consulta, por favor intenta nuevamente',
                showConfirmButton: true,
                background:'black',
                color:'white',
              })
              form.current.reset();
        });
    };



    return(
        <div className="contacto" data-aos="fade-up">  
            <div className="contenido__top" data-aos="fade-up">
                <h2> Contacto</h2>
                <p>Envianos tu consulta por medio de nuestro formulario de contacto y te responderemos a la brevedad.</p> 
            </div>

            <div className="contactoRocket">
                <img src={astroRocket} alt="astroRocket" />
            </div>

            <form className="formsContacto" ref={form} onSubmit={sendEmail} >

                <label className="d-block">Nombre:</label>       
                <input 
                className="d-block" 
                type="text" 
                name= "name" 
                placeholder="Cual es tu nombre?" 
                required></input>

                <label className="d-block">Correo electronico:</label>     
                <input 
                name= "email" 
                type="email" 
                className="form-control" 
                placeholder="name@example.com" 
                required></input>

                <input type="text" placeholder="Asunto a tratar...(opcional)"></input>
                
                <textarea 
                name= "message" 
                className="comentario form-control" 
                placeholder="Escribe tu consulta" 
                required></textarea>   
                
            
                <button className= "submitButton" type="submit" disabled={pendiente ? true : false}>{pendiente ? "Enviando....." : "Enviar"}</button> 

            </form>
        
        
        </div>
    )
}

export default Contacto; 