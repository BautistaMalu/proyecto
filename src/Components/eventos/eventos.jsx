import React from 'react'
import { useState } from 'react'
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

function Eventos() {
  const [buttoncreacion, setButtonCreacion] = useState(false);

  
  let tevento="social";
  const listaEventos = [{
    nombre:"Evento1",
    descripcion:"El cumple de uno de los pibes",
    tevento: "social",
    imagena: tevento === "social" ? Eventosocial : tevento === "deportivo" ? Eventodeportivo : tevento === "formal" ? Eventoformal : Estrellitachica,
    fechacrea:"2 dias",
    creador:"Tuvi",
    favoritos:"no"
  }]
  return (
    <div className="peventos">
            
        <div className="header2">
            <Header2/>
        </div>
        <div className="todo">
        <div className="menu">

            <div className="botones1">
            <button className="crear" onClick={() => setButtonCreacion(true)}> + Crear</button>   

            <button className='volverme'>Volverme proovedor</button>
            </div>
            <div className="botones2">
            <button className="miseventos"> <img src={Cajita} alt="" className="cajita" />Mis eventos</button>

            <button className="compartidos"> <img src={Personas} alt="" className="personas" />Compartidos conmigo</button>

            </div>
            
        </div>
        <div className="eventos">
          {listaEventos.length > 0 ? listaEventos.map(({imagena,nombre,tevento,fechacrea,descripcion,creador})=> {
            return (
              <div className="hay">
                <div className="imagen">
                  <img src={imagena} alt="" className="imagenevento" />
                </div>
                <div className="textos">

                  <div className="teyf">
                    <h5 className="tipoevento">Evento {tevento}</h5>
                    <h5 className="fecha">Hace {fechacrea}</h5>
                  </div>
                
                  <div className="tituloydesc">
                    <h2 className="titulo">{nombre}</h2>
                    <h5 className="desc">{descripcion}</h5>
                  </div>

                  <div className="usyfav">
                    <img src={Pj} alt="" className="pj" />
                    <h5 className="us"> @{creador}</h5>
                    <button className="fav">Info</button>
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
        </div>
        </div>
    </div>
  )
}

export default Eventos