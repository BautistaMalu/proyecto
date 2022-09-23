import React from 'react'
/*import {Link} from 'react-router-dom'*/
import './home.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Ideas from './Ideas.png';
import Compu from './Compu.png';
import Lineas from './Lineas.png';
import Invitaciones from './Invitaciones.png';
import Items from './Items.png';
import Lista from './Lista.png';
import Proveedores from './Proveedores.png';

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
              <div className="cuadrados">
                <img src={Lineas} alt="" className="lineas" />
                <h1 className="elegir">Porque deberian elegirnos</h1>
                <h4 className="herramientas">Tenemos una gran variedad de herramientas que haran con que tu experiencia sea mucho mas agradable </h4>
               
                <div className="lista">
                  <h1 className="titulo1">Lista de invitados</h1>
                  <h4 className="subtitulo1">Te proporcionamos una lista en donde tendras la posibilidad de ver quienes podran estar presentes en tu evento. </h4>
                </div>

                <div className="items">
                </div>
                
                <div className="invitaciones">
                </div>

                <div className="proveedores">
                </div>

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