import React from 'react'
import './logout.css'
import Puerta from './Puerta.png'

function logout(props2) {
  return (props2.trigger) ? (

    <div className="todologout">
        <div className="salir">
        <button className="salirbtn"> <img src={Puerta} alt="" className="puerta" /> Cerrar Sesión </button>
            {props2.children}
        </div>
    </div>

  ) : "";
}

export default logout