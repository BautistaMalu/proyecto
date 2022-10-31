import React from 'react'
import './proovedores.css';
import { useState } from 'react'
import Cajita from '../eventos/Cajita.png';
import Personas from '../eventos/Personas.png';
import Header2 from '../header2/header2';
import {Link} from 'react-router-dom';
import Redes from '../eventos/Proovedor.png';
import Creacion from '../creacion/creacion';
import Telefono from './Telefono.png';
import Pro1 from './Pro1.png';
import Pro2 from './Pro2.png';
import Pro3 from './Pro3.png';
import Volverse1 from '../volverse1/volverse1';
import Volverse2 from '../volverse2/volverse2';
function Proovedores() {
    const [buttoncreacion, setButtonCreacion] = useState(false);
    const [buttonvolverse1, setButtonVolverse1] = useState(false);
    const [buttonvolverse2, setButtonVolverse2] = useState(false);
  return (
    <div className="todoproovedores">
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
              <button className="miseventos"> <img src={Cajita} alt="" className="cajita" /><Link to='/eventos' className='us'>Mis eventos</Link></button>

              <button className="compartidos"> <img src={Personas} alt="" className="personas" />Compartidos conmigo</button>

              <button className="proovedor"> <img src={Redes} alt="" className="redes" /><Link to='/proovedores' className='us'>Proovedores</Link></button>
            </div>
              
          </div>
          <div className="proo">
            <div className="segundo">
              <img src={Pro2} alt="" className="imgpro" />
              <h3 className="nombrenegocio">Donatello's pizza</h3>
              <h6 className="descripcionnego">Una verdadera pizzeria de barrio</h6>
              <h5 className="nombredelpro">Eusebio Donatello</h5>
              <h5 className="mailpro">eusebiodon@gmail.com</h5>
              <img src={Telefono} alt="" className="telefono" />
              <h5 className="numdelpro">+54 11 4312-8826</h5>
            </div>
            <div className="tercero">
              <img src={Pro3} alt="" className="imgpro" />
              <h3 className="nombrenegocio">Idolatrix</h3>
              <h6 className="descripcionnego">Un delivery de tacos contenporaneos</h6>
              <h5 className="nombredelpro">Ramiro Gonzalez</h5>
              <h5 className="mailpro">ramigonzalez@gmail.com</h5>
              <img src={Telefono} alt="" className="telefono" />
              <h5 className="numdelpro">+54 11 3920-1239</h5>
            </div>
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

export default Proovedores