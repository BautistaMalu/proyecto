import React from 'react';
import './infoeventos.css';
import Header3 from '../header3/header3';
import Tacho from './Tacho.png';
import Dots from './Dots.png';
import Noconcurren from './Noconcurren.png';
import Pendientes from './Pendientes.png';
import Concurren from './Confirmados.png';
import Circuloverde from './Circuloverde.png';
import Circuloamarillo from './Circuloamarillo.png';
import Circulorojo from './Circulorojo.png';
import Fotoej from '../header2/Ejemplo.png';
import {Link, useParams} from 'react-router-dom';
import Dotsline from './3dots.png';
import { useState, useEffect  } from 'react'
import Agregar from '../agreagarpersonas/agregar';
import Estadoo from '../estado/estado';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

function Infoeventos() {

  const [buttoncompartir, setButtonCompartir] = useState(false);
  const [buttondots, setButtonDots] = useState(false);
  const [fetchOutput, setFetchOutput] = useState(null);
  const [loggedUserInfo, setLoggedUserInfo] = useState(null);

  const { id } = useParams();

  const confirmationCounter = {
    "Confirmado": 0,
    "Pendiente": 0,
    "Ausente": 0
  }

  const ApiURLBase = "https://GroupIT-API.up.railway.app"
  const listaInvitados = []

  const getUserInfo = async () => {
    const requestConfig = {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    };

    const response = await fetch(ApiURLBase + "/user/getUser", requestConfig);

    const data = await response.json();

    return data;
  };

  const getInvitedList = async (eventId) => {
    const requestConfig = {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({nombreEvento: eventId})
    };
    
    const response = await fetch(ApiURLBase + "/event/participants", requestConfig);

    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      alert("Something went wrong");
    }
  }

  useEffect(() => {
    getInvitedList(id).then((data) => {
      setFetchOutput(data);
    });
    getUserInfo().then((data) => {
      setLoggedUserInfo(data);
    });
  }, []);

  fetchOutput?.forEach((personObject) => {
    const estado = personObject.confirmacion;

    confirmationCounter[estado]++;

    const newObject = {
      nombreus: personObject.usuario.nombreUsuario,
      mail: personObject.usuario.mail,
      estado: estado,
      imagene: estado === "Confirmado" ? Circuloverde : estado === "Pendiente" ? Circuloamarillo : estado === "Ausente" ? Circulorojo : "",
      rango: "Invitado"
    }
    
    if (newObject.nombreus === loggedUserInfo?.nombreUsuario) {
      listaInvitados.unshift(newObject);
    } else {
      listaInvitados.push(newObject);
    }
    
  })

  return (
                
    <div className="todoinfo">

      <div className="header">
        <Header3/>
      </div>
      <div className="info">
       
        <div className="primeralinea">

          <h3 className="lista">Lista de invitados</h3>

          <button className="borrar"><img src={Tacho} alt="" className="tacho" /> Borrar</button>

          <button className="compartir" onClick={() => setButtonCompartir(true)} ><img src={Dots} alt="" className="dots" /> Compartir</button>
            
        </div>
          <Agregar trigger={buttoncompartir} setTrigger={setButtonCompartir}></Agregar>
        <div className="segundalinea">
          <div className="concurren">
            <img src={Concurren} alt="" className="concurrenimg" />
            <h3 className="concurrentext">Concurren</h3>
            <h3 className="numconfirmados">{confirmationCounter.Confirmado}</h3>
          </div>

          <div className="pendientes">
            <img src={Pendientes} alt="" className="pendientesimg" />
            <h3 className="pendientestext">Pendientes</h3>
            <h3 className="numpendientes">{confirmationCounter.Pendiente}</h3>
          </div>

          <div className="noconcurren">
            <img src={Noconcurren} alt="" className="noconcurrenimg" />
            <h3 className="noconcurrentext">No concurren</h3>
            <h3 className="numnoconfirmados">{confirmationCounter.Ausente}</h3>
          </div>

        </div>
        <div className="terceralinea">
          <button className="todosbtn">Todos</button>
          <button className="disponiblesbtn">Disponibles</button>
          <button className="pendientesbtn">Pendientes</button>
          <button className="ausentesbtn">Ausentes</button>
        </div>
        <div className="linea"></div>
        <div className="invitados">
          {listaInvitados.length > 0 ? listaInvitados.map(({nombreus,rango,estado,imagene,mail})=> {
              return (

                <div className="gente">
                  <div className="foto"><img src={Fotoej} alt="" className="fotoej" /></div>
                  <div className="usymail">
                    <h4 className="us">{nombreus}</h4>
                    <h5 className="mail">{mail}</h5>
                  </div>
                  <div className="estadoycirc">
                    <img src={imagene} alt="" className="circu" />
                    <h4 className="estadoo">{estado}</h4>
                  </div>
                  <div className="adm">
                    <h4 className="admin">{rango}</h4>
                  </div>
                  <div className="btns">
                    <button className="items"><Link to='/lista' className='itemslista'>Items</Link></button>
                    <button className="tresdots" onClick={() => setButtonDots(true)}><img src={Dotsline} alt="" className="dotsline" /></button>
                  </div>
                </div>
                
            )
          }) : ""
          }
          <Estadoo trigger={buttondots} setTrigger={setButtonDots}></Estadoo>
        </div>
      </div>
    </div>
  )
}

export default Infoeventos