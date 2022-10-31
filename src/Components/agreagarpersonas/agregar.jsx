import React from 'react';
import './agregar.css';
import Personitas from './Personitas.png';
import Cerrar from '../creacion/cruz.png';
import {useParams} from 'react-router-dom';

function Agregar(props3) {
  //http://localhost:8080
  const [newUserData, setNewUserData] = React.useState({});
  const ApiURLBase = "https://GroupIT-API.up.railway.app"
  const { id } = useParams();

  const handleInputChange = (event) => {
    setNewUserData({
      ...newUserData,
      [event.target.name]: event.target.value,
    });
  };

  const addUserToEvent = async (eventId, newUserName) => {
    const requestConfig = {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({idEvento: eventId, nombreUsuario: newUserName})
    };

    const response = await fetch(ApiURLBase + "/event/addUser", requestConfig);

    if (response.status === 200) {
      const data = await response.json();
      return data;
      
    } else {
      alert("Vos no podes agregar, PANFLIN");
    }
  }

  return (props3.trigger) ? (
    <div className="todoagregar">

      <div className="agregar">

        <button className="cerrar" onClick={() => props3.setTrigger(false)}> <img src={Cerrar} alt="" className="cruz" /> </button>
            {props3.children}

        <div className="compartir">
            <h4 className="titulocomp">Compartir evento </h4>
            <label for="adicionar" className="nombreus">Nombre de usuario</label>
            <input type="text" className="adicionar" onChange={handleInputChange} placeholder='Adicione personas a su evento'/>

          <div className="personasysolo">
          <img src={Personitas} alt="" className="personitas" />
            <h5 className="solo">Solo personas con el link o una invitación podran accedera al evento </h5>
          </div>
          <button className="compartir" onClick={() => addUserToEvent(id, newUserData[""])}>Compartir</button>
        </div>

      </div>

    </div>
  ) :"";
}

export default Agregar