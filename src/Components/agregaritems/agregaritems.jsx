import React from 'react'
import './agregaritems.css';
import { useState } from 'react'
import Cerrar from '../creacion/cruz.png';
function Agregaritems(props5) {
  return (props5.trigger) ? (
    <div className="todoagregaritems">
        
        <div className="agregaritems">

            <button className="cerrar" onClick={() => props5.setTrigger(false)}> <img src={Cerrar} alt="" className="cruz" /> </button>
            {props5.children}

            <div className="anadiritem">
                <h4 className="titulo">Añadir item a la lista</h4>
                <div className="anadirii">
                    <label for="nombreitem" className="nombre">Nombre del item</label>
                    <input type="text" className="escribiitem" placeholder='Escribí el nombre del item'/>
                </div>
                <div className="tipoycant">
                    <div className="tipoitem">
                        <label for="ej" className="tipoi">Tipo de item</label>
                        <input type="text" className="ej" placeholder='Ej Snack, bebida, pelota'/>
                    </div>
                    <div className="cantitem">
                        <label for="cant" className="cantt">Cantidad</label>
                        <input type="number" className="cant" />
                    </div>
                </div>
                <button className="anadir">+ Añadir</button>
            </div>


        </div>
    </div>
  ) :"";
}

export default Agregaritems