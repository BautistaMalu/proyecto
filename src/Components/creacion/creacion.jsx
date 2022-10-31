import React from 'react'
import './creacion.css';
import Cerrar from './cruz.png';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Creacion(props) {
  
  const ApiBaseURL = "https://GroupIT-API.up.railway.app"
  const [createEventData, setCreateEventData] = React.useState(null);


  const handleInputChange = (event) => {
    setCreateEventData({
      ...createEventData,
      [event.target.name]: event.target.value,
    });
  };

  const createEvent = async () => {

    const requestConfig = {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(createEventData)
    };

    const response = await fetch(ApiBaseURL + "/event", requestConfig);

    if (response.status === 200) {
      const data = await response.json();
      window.location.reload();
      return data;
    } else {
      alert("Something went wrong");
    }
    
  }


  return (props.trigger) ? (
    <div className="todocrea">

        <div className="creacion">

            <button className="cerrar" onClick={() => props.setTrigger(false)}> <img src={Cerrar} alt="" className="cruz" /> </button>
            {props.children}

            <div className="labelesyinputs">
              <h2 className="crearevento">Crear evento</h2>

              <label className="tituloevento" for="escribititulo" >Titulo del Evento</label>
              <input type="text" className="escribititulo" onChange={handleInputChange} name="nombre" placeholder='Escribi el titulo del evento'/>

              <label className="tipoevento" for="escribitipo" >Lugar del Evento</label>
              <input placeholder="Lugar del evento" onChange={handleInputChange} name="lugar" className='escribitipo' />      
              
              <label className="labeldesc" for="escribidesc" >Descripcion </label>
              <input type="text" className="escribidesc" onChange={handleInputChange} name="descripcion" placeholder='Escribi una descripcion para tu evento'/>
              <div className="botones">
                <button className="bcancelar"  onClick={() => props.setTrigger(false)}>Cancelar</button>
                <button className="bcrear" onClick={() => createEvent()}>+ Crear</button>
              </div>
            </div>

        </div>
    </div>
  ) : "";
}

export default Creacion