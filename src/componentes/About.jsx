import React from "react";

const About =() =>{
    return(
        <div className="containerAbout" data-aos="fade-up">

            <div className="introAbout">
                <h4>Quienes somos</h4>
                <p>Somos un estudio creado por diseñadores para diseñadores. Trabajamos desde el 2010 con el objetivo de instalar la impresión 3D en Argentina, un proceso poco común para esa época… Durante los últimos años construimos vínculos de confianza con nuestros clientes, ofreciéndoles las mejores impresiones a los precios más competitivos, y con un plazo de ejecución más corto. Pero no solo somos un estudio de impresión: en Zlab desarrollamos proyectos ad-hoc y/o diseñamos, simplemente porque nos apasiona crear formas y objetos nuevos.</p>
            </div>

            <div className="detalleAbout">
                <div className="detalleUnoAbout">
                    <h4>Comprometidos con tu trabajo</h4>
                    <p>Te ofrecemos el complemento ideal para tu actividad (trabajamos con empresas, estudios de diseño industrial, proyectistas y estudiantes), haciendo que el pasaje de “virtual” a “real” se produzca de una forma rápida, precisa y económica.</p>
                </div>
                <div className="detalleDosAbout">
                    <h4>Soporte personalizado</h4>
                    <p>Como en Astro3D somos humanos, y no robots automatizados, revisamos todos los archivos antes de imprimirlos, ya que nuestro objetivo es conseguir que la impresión salga bien de primera, y no tener que jugar un juego de prueba y error antes de conseguir la calidad deseada por el cliente. Esto te ahorra tiempo y plata.</p>
                </div>
                <div className="detalleTresAbout">
                    <h4>Te acompañamos en el desarrollo</h4>
                    <p>Solucionamos los problemas que nos quieras plantear, te ayudamos a imaginar alternativas con diferentes grados de innovación adaptadas a tus posibilidades productivas y recursos. Para nosotros, muchas veces, menos es más.</p>
                </div>


            </div>

            <div className="impresionAbout">
                <h4>Impresión 3D</h4>
                <p>La impresión en 3D es una forma de creación rápida de prototipos, dónde se hacen modelos capa a capa sin el uso de ningún tipo de moldes. Existen diferentes tipos de procesos pero todos funcionan esencialmente con los mismos principios. Cada método tiene sus ventajas e inconvenientes, según el que elijas vas a poder realizar una pieza con mejor acabado en la superficie, un prototipo más fuerte o modelos detallados mejor visualización.</p>
            </div>


        </div>
    )
}

export default About;