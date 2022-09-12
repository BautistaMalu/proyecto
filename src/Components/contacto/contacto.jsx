import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../header/header';
import './contacto.css';
import Foto from './Compu.png';
import Footer from '../footer/footer';
function contacto() {
  return (
    
    <div className="contacto">

      <div className="header">
        <Header/>
      </div>

      <div className="contenidocontacto">

        
      <div className="ladoizq">

          <div className="textos">
          <h2 className="contactate">Contactate con nosotros</h2>
          <h4 className="preguntas">Nos encataria escuchar tus preguntas o propuestas</h4>
          </div>

          <div className="labels1y2">
          <label for="nombre" id="l1">Nombre</label>
          <label for="apellido" id='l2'>Apellido</label>
          </div>

          <div className="nya">
          <input placeholder="Ingresa su nombre"type="text" id="nombre" />
          <input placeholder="Ingresa su apellido"type="text" id="apellido" />
          </div>
          
          <div className="em">
          <label for="email1" id="l3">Email</label>
          <input placeholder="Ingresa su mail"type="email" id="email1" />
          
          <label for="msj" id="l4">Mensaje</label>
          <input placeholder="Escriba aca su mensaje"type="text" id="msj" />
          <button className="enviar">Enviar</button>
          </div>



        </div>

        <div className="ladoder">

          <h2 className="dispocision">Estamos a tu disposición</h2>
          <h4 className="duda">Enivanos cualquier duda, consejo o queja que tengas y te la responderemos a nombre de GroupIT@gmail.com  </h4>
          <div className='foto'><img src={Foto} alt="" /></div>
        </div> 

      </div>

      <div className="footer">
        <Footer/>
      </div>
    </div>
  )
}

export default contacto