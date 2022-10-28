import React from 'react'
import './creacion.css';
import Cerrar from './cruz.png';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
function creacion(props) {
  
  const options = [
    { value: "social", label: "Social" },
    { value: "deportivo", label:"Deportivo"},
    { value:"formal", label:"Formal"}
  ];

  const defaultOption = options[0];

  return (props.trigger) ? (
    <div className="todocrea">

        <div className="creacion">

            <button className="cerrar" onClick={() => props.setTrigger(false)}> <img src={Cerrar} alt="" className="cruz" /> </button>
            {props.children}

            <div className="labelesyinputs">
              <h2 className="crearevento">Crear evento</h2>

              <label className="tituloevento" for="escribititulo" >Titulo del evento</label>
              <input type="text" className="escribititulo" placeholder='Escribi el titulo del evento'/>

              <label className="tipoevento" for="escribitipo" >Titulo del evento</label>
              <Dropdown options={options} value={defaultOption} placeholder="Select an option" className='escribitipo' />      
              
              <label className="labeldesc" for="escribidesc" >Descripcion (opcional) </label>
              <input type="text" className="escribidesc" placeholder='Escribi una descripcion para tu evento'/>
              <div className="fechayinvitados">
                <div className="invitados">
                  <label className="labelcant" for="cantinvitados" >Cantidad de invitados</label>
                  <input type="number" className="cantinvitados" min={0}/>
                </div>
                <div className="fechas2">
                  <label className="labelfecha" for="fechadelevento" >Cantidad de invitados</label>
                  <input type="date" className="fechadelevento" />
                </div>
              </div>
              <div className="botones">
                <button className="bcancelar"  onClick={() => props.setTrigger(false)}>Cancelar</button>
                <button className="bcrear">+ Crear</button>
              </div>
            </div>

        </div>
    </div>
  ) : "";
}

export default creacion