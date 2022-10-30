import React from 'react';
import './agregar.css';
import Personitas from './Personitas.png';
import Cerrar from '../creacion/cruz.png';
function Agregar(props3) {

  return (props3.trigger) ? (
    <div className="todoagregar">

      <div className="agregar">

        <button className="cerrar" onClick={() => props3.setTrigger(false)}> <img src={Cerrar} alt="" className="cruz" /> </button>
            {props3.children}

        <div className="compartir">
            <h4 className="titulocomp">Compartir evento </h4>
            <label for="adicionar" className="nombreus">Nombre de usuario</label>
            <input type="text" className="adicionar" placeholder='Adicione personas a su evento'/>

          <div className="personasysolo">
          <img src={Personitas} alt="" className="personitas" />
            <h5 className="solo">Solo personas con el link o una invitación podran accedera al evento </h5>
          </div>
          <button className="compartir">Compartir</button>
        </div>

      </div>

    </div>
  ) :"";
}

export default Agregar