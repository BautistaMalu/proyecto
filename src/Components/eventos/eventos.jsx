import { useState, useEffect } from 'react'
import './eventos.css';
import Cajita from './Cajita.png';
import Personas from './Personas.png'
import Estrellita from './Estrellita.png';
import Tacho from './Tacho.png';
import Header2 from '../header2/header2';
import Lamparita from './Lamparita.png';
import Pj from './Pj.png';
import Estrellitachica from './Estrellitachica.png';
import Eventosocial from './Eventosocial.png';
import Eventodeportivo from './Eventodeportivo.png';
import Eventoformal from './Eventoformal.png';
import Creacion from '../creacion/creacion';
import {Link} from 'react-router-dom';
import Redes from './Proovedor.png';
import moment from "moment";
import Volverse1 from '../volverse1/volverse1';
import Volverse2 from '../volverse2/volverse2';

function Eventos() {
  const [buttoncreacion, setButtonCreacion] = useState(false);
  const [buttonvolverse1, setButtonVolverse1] = useState(false);
  const [buttonvolverse2, setButtonVolverse2] = useState(false);
  const [fetchOutput, setFetchOutput] = useState(null);
  const ApiURLBase = "https://groupit-api.vercel.app"
  let tevento="social";

  const listaEventos = []

  const getEvents = async () => {
    const requestConfig = {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    };

    const response = await fetch(ApiURLBase + "/event/all", requestConfig);

    const data = await response.json();

    return data;
  };

  useEffect(() => {
    getEvents().then((data) => {
      setFetchOutput(data);
    });
  }, []);

  fetchOutput?.forEach((event) => {
    const eventInfo = {
      nombre: event.nombre,
      descripcion: event.descripcion,
      tevento: tevento,
      imagena: tevento === "social" ? Eventosocial : tevento === "deportivo" ? Eventodeportivo : tevento === "formal" ? Eventoformal : Estrellitachica,
      fechacrea: moment(event.fecha).utc().format('YYYY-MM-DD'),
      creador: event.usuario.nombreUsuario,
      id: event.id
    };

    listaEventos.push(eventInfo);
  });


  return (
    <div className="peventos">
            
        <div className="header2">
            <Header2/>
        </div>

        <div className="todo">
          <div className="menu">

            <div className="botones1">
              <button className="crear" onClick={() => setButtonCreacion(true)}> + Crear</button>   

              <button className='volverme'onClick={() => setButtonVolverse1(true)}>Volverme proovedor</button>
            </div>

            <div className="botones2">
              <button className="miseventos"> <img src={Cajita} alt="" className="cajita" />Mis eventos</button>

              <button className="compartidos"> <img src={Personas} alt="" className="personas" />Compartidos conmigo</button>

              <button className="proovedor"> <img src={Redes} alt="" className="redes" /><Link to='/proovedores' className='us'>Proovedores</Link></button>
            </div>
              
          </div>
          <div className="eventos">
            {listaEventos.length > 0 ? listaEventos.map(({id,imagena,nombre,tevento,fechacrea,descripcion,creador})=> {
              return (
                <div className="hay">
                  <div className="imagen">
                    <img src={imagena} alt="" className="imagenevento" />
                  </div>

                  <div className="textos">

                    <div className="teyf">
                      <h5 className="tipoevento">Evento {tevento}</h5>
                      <h5 className="fecha">{fechacrea}</h5>
                    </div>
                  
                    <div className="tituloydesc">
                      <h2 className="titulo">{nombre}</h2>
                      <h5 className="desc">{descripcion}</h5>
                    </div>

                    <div className="usyfav">
                      <img src={Pj} alt="" className="pj" />
                      <h5 className="us"> @{creador}</h5>
                      <button className="fav"><Link to={`/info/${id}`} className='linkinfoeventos'>Info</Link></button>
                    </div>

                  </div>
              </div>
            )
          }) : 
          <div className="no">
            <h1 className="nohay">No tienes ningún evento </h1>
            <h4 className="momento">Es momento de empezar a crear </h4>
            <img src={Lamparita} alt="" className="lamparita" />
          </div>
          }
          </div>

          <div className="popup">
            <Creacion trigger={buttoncreacion} setTrigger={setButtonCreacion}>
            </Creacion>
            <Volverse1 trigger={buttonvolverse1} setTrigger={(bool)=>{
              setButtonVolverse1(bool) 
              setButtonVolverse2(!bool)
              }}>

            </Volverse1>
            <Volverse2 trigger={buttonvolverse2} setTrigger={setButtonVolverse2}>
            </Volverse2>
          </div>
        </div>
    </div>
  )
}

export default Eventos