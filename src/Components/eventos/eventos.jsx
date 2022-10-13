import React from 'react'
import Logo from '../login/Logo.png';
import Lupita from './Lupita.png';
import './eventos.css';
import Fotoej from './Ejemplo.png';
import Cajita from './Cajita.png';
import Personas from './Personas.png'
import Estrellita from './Estrellita.png';
import Tacho from './Tacho.png';
function eventos() {
  return (
    <div className="peventos">
            
        <div className="header2">
            <div className="ladoizqh">
                <img src={Logo} alt="" className="logo" />
            </div>
            <div className="ladoderh">
                <img src={Lupita} alt="" className="lupita" />
                <input type="text" placeholder='Buscar en mis eventos' className="buscar" />
                {/*ver de agarrar una foto */}
                <img src={Fotoej} alt="" className="foto" />
                <h3 className="nombreus">Nombre de Ejemplo</h3>
            </div>
        </div>

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
  )
}

export default eventos