import React from 'react'
import './estado.css';
import Cerrar from '../infoeventos/3dots.png';
import Circuloverde from '../infoeventos/Circuloverde.png';
import Circuloamarillo from '../infoeventos/Circuloamarillo.png';
import Circulorojo from '../infoeventos/Circulorojo.png';
function Estado(props4) {

  return (props4.trigger) ? (

    <div className="todoestado">
      <button className="cerrar" onClick={() => props4.setTrigger(false)}> <img src={Cerrar} alt="" className="cruz" /> </button>
        {props4.children}

      <div className="estado">
        <button className="disponible"><img src={Circuloverde} alt="" className="circuloverde" /> Disponible</button>
        <button className="pendiente"><img src={Circuloamarillo} alt="" className="circuloamarillo" /> Pendiente</button>  
        <button className="noconfirmados"><img src={Circulorojo} alt="" className="circulorojo" /> Ausente</button>
      </div>

    </div>
  ):"";
}

export default Estado