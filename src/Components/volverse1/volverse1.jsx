import React from 'react'
import { useState } from 'react';
import './volverse1.css';
import Cerrar from '../creacion/cruz.png';
import Paso from './Paso1.png';
import Volverse2 from '../volverse2/volverse2'

function Volverse1(props6) {


    
  return (props6.trigger) ? (
    <div className="todovolverse1">
        <button className="cerrar" onClick={() => props6.setTrigger(false)}> <img src={Cerrar} alt="" className="cruz" /> </button>
            {props6.children}
            <h3 className="volverme">Volverme proveedor </h3>
        <div className="labelsyinputs2">
          <label For="inpnombre" className="labelnombre">Nombre</label>
          <input type="text" className="inpnombre" placeholder='Escribí tu nombre y apellido'/>

          <label For="inpnegocio" className="labelnegocio">Nombre del negocio</label>
          <input type="text" className="inpnegocio" placeholder='Escribí el nombre de su negocio'/>

          <label For="inptelefono" className="labeltelefono">Numero de telefono</label>
          <input type="number" className="inptelefono" placeholder='Introducí tu numero de telefono'/>
          
          <label For="inpemail" className="labelemail">Email</label>
          <input type="text" className="inpemail" placeholder='Escribí tu email'/>

          <label For="inptservicio" className="labeltservicio">Tipo de servicio</label>
          <input type="text" className="inptservicio" placeholder='Comida, bebidas, etc.'/>

          <label For="inpservicio" className="labelservicio">¿Que servicio ofreces?</label>
          <input type="text" className="inpservicio" placeholder='Negocio de empanadas, pizzeria, etc '/>
        </div>
        <div className="btns">
          <button className="cancelar" onClick={() => props6.setTrigger(false)}>Cancelar</button>
            {props6.children}
          <button className="prox"onClick={() => {props6.setTrigger(false);}}>Proxima </button>
            {props6.children}
        </div>

            
    </div>
  ):null;
}

export default Volverse1