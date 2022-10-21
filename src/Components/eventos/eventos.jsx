import React from 'react'
import './eventos.css';
import Cajita from './Cajita.png';
import Personas from './Personas.png'
import Estrellita from './Estrellita.png';
import Tacho from './Tacho.png';
import Header2 from '../header2/header2';
import Lamparita from './Lamparita.png';
function eventos() {
  const listaEventos = []
  return (
    <div className="peventos">
            
        <div className="header2">
            <Header2/>
        </div>
        <div className="todo">
        <div className="menu">

            <div className="botones1">
            <button className="crear">+ Crear</button>

            <button className='volverme'>Volverme proovedor</button>
            </div>
            <div className="botones2">
            <button className="miseventos"> <img src={Cajita} alt="" className="cajita" />Mis eventos</button>

            <button className="compartidos"> <img src={Personas} alt="" className="personas" />Compartidos conmigo</button>

            <button className="favoritos"> <img src={Estrellita} alt="" className="estrellita" />Favoritos</button>

            <button className="basura"> <img src={Tacho} alt="" className="tacho" />Basura</button>
            </div>
            
        </div>
        <div className="eventos">
        {listaEventos.length > 0 ? listaEventos.map(({name})=> {
          return (
            <h1>{name}</h1>
          )
        }) : 
        <div className="No">
        <h1 className="nohay">No tienes ningún evento </h1>
        <h4 className="momento">Es momento de empezar a crear </h4>
        <img src={Lamparita} alt="" className="lamparita" />
        </div>
         }
        </div>
        </div>
    </div>
  )
}

export default eventos