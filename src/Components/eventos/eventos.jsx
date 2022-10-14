import React from 'react'
import './eventos.css';
import Cajita from './Cajita.png';
import Personas from './Personas.png'
import Estrellita from './Estrellita.png';
import Tacho from './Tacho.png';
import Header2 from '../header2/header2';
function eventos() {
  return (
    <div className="peventos">
            
        <div className="header2">
            <Header2/>
        </div>
        <div className="todo">
        <div className="menu">
            <button className="crear">+ Crear</button>

            <button className='volverme'>Volverme proovedor</button>

            <button className="miseventos"> <img src={Cajita} alt="" className="cajita" />Mis eventos</button>

            <button className="compartidos"> <img src={Personas} alt="" className="personas" />Compartidos conmigo</button>

            <button className="favoritos"> <img src={Estrellita} alt="" className="estrellita" />Favoritos</button>

            <button className="basura"> <img src={Tacho} alt="" className="tacho" />Basura</button>
        </div>
        <div className="eventos">

        </div>
        </div>
    </div>
  )
}

export default eventos