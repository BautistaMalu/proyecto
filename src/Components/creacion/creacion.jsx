import React from 'react'
import './creacion.css';
import Cerrar from './cruz.png';
function creacion(props) {
  return (props.trigger) ? (
    <div className="todocrea">

        <div className="creacion">

            <button className="cerrar" onClick={() => props.setTrigger(false)}> <img src={Cerrar} alt="" className="cruz" /> </button>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default creacion