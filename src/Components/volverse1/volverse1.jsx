import React from 'react'
import { useState } from 'react';
import './volverse1.css';
import Cerrar from '../creacion/cruz.png';
import Paso from './Paso1.png';

function Volverse1(props6) {

    const [buttonvolverse2, setButtonVolverse2] = useState(false);
    
  return (props6.trigger) ? (
    <div className="todovolverse1">
        <button className="cerrar" onClick={() => props6.setTrigger(false)}> <img src={Cerrar} alt="" className="cruz" /> </button>
            {props6.children}

        <div className="textos">
          <h6 className="registrotxt">Registro</h6>
          <h6 className="serviciotxt">Servicio</h6>
          <h6 className="confirmaciontxt">Confirmación</h6>
        </div>
        <div className="labelsyinputs2">
          <label For="inpnombre" className="labelnombre">Nombre</label>
          <input type="text" className="inpnombre" placeholder='Escribí su nombre y apellido'/>

          <label For="inpnombre" className="labelnombre">Nombre</label>
          <input type="text" className="inpnombre" placeholder='Escribí su nombre y apellido'/>

          <label For="inpnombre" className="labelnombre">Nombre</label>
          <input type="text" className="inpnombre" placeholder='Escribí su nombre y apellido'/>
          
          <label For="inpnombre" className="labelnombre">Nombre</label>
          <input type="text" className="inpnombre" placeholder='Escribí su nombre y apellido'/>
        </div>
            
    </div>
  ):"";
}

export default Volverse1