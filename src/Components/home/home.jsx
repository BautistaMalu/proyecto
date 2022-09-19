import React from 'react'
/*import {Link} from 'react-router-dom'*/
import './home.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Ideas from './Ideas.png';
import Compu from './Compu.png';
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

          </div>

          <div className="gris">

              <div className="imagenes">
                <img src={Ideas} alt="" className="blancoideas" />
                <img src={Compu} alt="" className="Compu" />
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