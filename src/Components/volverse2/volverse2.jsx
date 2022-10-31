import React from 'react'

import './volverse2.css';
import Cerrar from '../creacion/cruz.png';
import Revisar from './revisar.png';
function Volverse2(props7) {
  return (props7.trigger) ? (

    <div className="todovolverse2">

      <button className="cerrar" onClick={() => props7.setTrigger(false)}> <img src={Cerrar} alt="" className="cruz" /></button>
        {props7.children}
        
      <h3 className="revisar">Felicitaciones, al terminar se enviará un mail a los desarrolladores, y analizaremos tu petición</h3>
      <img src={Revisar} alt="" className="revisartxt" />
      <button className="enviarmail" onClick={() => props7.setTrigger(false)}> Enviar mail</button>
        {props7.children}
    </div>
  ) : "";
}

export default Volverse2