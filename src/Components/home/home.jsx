import React from 'react'
/*import {Link} from 'react-router-dom'*/
import './home.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Ideas from './Ideas.png';
function home() {
  return (

    <div className='Home'>

        <div className="header">
          <Header/>
        </div>

        <div className="contenidohome">

          <div className="azul">

            <div className="textos">

              <h1 className="planificar">Planifica y ejecuta tus eventos de una forma eficiente y facil</h1>

              <h4 className="brindar">¡Te brindamos la posibilidad de contactarte con proveedores y distintas opciones que facilitaran tu organizacion!</h4>

              <button className="crear">Empieza a crear</button>

            </div>
            <div className="blanco1">
              <img src={Ideas} alt="" className="blancoideas" />
            </div>

          </div>

        </div>

        <div className="footer">
          <Footer/>
        </div>


    </div>
  )
}

export default home