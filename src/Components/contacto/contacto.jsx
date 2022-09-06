import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../header/header';
import './contacto.css';
import Foto from './Compu.png';

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

          <div className="nya">
          <label for="nombre" id="l1">Nombre</label>
          <input placeholder="Ingresa su nombre"type="text" id="nombre" />

          <label for="apellido" id='l2'>Apellido</label>
          <input placeholder="Ingresa su apellido"type="text" id="apellido" />
          </div>
          
          <div className="em">
          <label for="email1">Email</label>
          <input placeholder="Ingresa su nombre"type="email" id="email1" />
          
          <label for="msj">Mensaje</label>
          <input placeholder="Escriba aca su mensaje"type="text" id="msj" />
          </div>


        </div>

        <div className="ladoder">

          <h2 className="dispocision">Estamos a tu disposición</h2>
          <h4 className="duda">Enivanos cualquier duda, consejo o queja que tengas y te la responderemos a nombre de GroupIT@gmail.com  </h4>
          <div className='foto'><img src={Foto} alt="" /></div>
        </div> 

      </div>

      <div className="footer">

      </div>
    </div>
  )
}

export default contacto