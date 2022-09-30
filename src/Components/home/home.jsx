import React from 'react'
import {Link} from 'react-router-dom'
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
import Circulos from './Circulos.png';

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
                  <img src={Lista} alt="" className="foto1" />
                  <h3 className="titulo1">Lista de invitados</h3>
                  <h5 className="subtitulo1">Te proporcionamos una lista en donde tendras la posibilidad de ver quienes podran estar presentes en tu evento. </h5>
                </div>

                <div className="items">
                <img src={Items} alt="" className="foto2" />
                  <h3 className="titulo2">Items a traer</h3>
                  <h5 className="subtitulo2">Usando nuestro sitio web podras visualizar quienes traen cada item a tu evento, desde una bebida hasta un snack. </h5>
                </div>
                
                <div className="invitaciones">
                <img src={Invitaciones} alt="" className="foto3" />
                  <h3 className="titulo3">Invitaciones</h3>
                  <h5 className="subtitulo3">Tendras la posibilidad de agregar personas a tu evento al mismo tiempo de poder ser invitado a los eventos de los demas. </h5>
                </div>

                <div className="proveedores">
                <img src={Proveedores} alt="" className="foto4" />
                  <h3 className="titulo4">Proveedores </h3>
                  <h5 className="subtitulo4">Adicionalemente te ofrecemos los medios para contratar el servicio ideal para tu evento. </h5>
                </div>

              </div>

              <div className="blanco">

                <div className="ladoizqb">

                  <h5 className="servicio">Nuestro servicio</h5>
                
                  <h2 className="ayudamos">Te ayudamos a formar grupos </h2>

                  <h5 className="nuestra">Nuestra pagina web no solo va a ayudarte mediante diversas herramientas a poder crear diversos grupos para distintos eventos, sino que tambien te servira como una lista en donde podras ver quienes traen cada item. Todo esto con el fin de ayudate con tu organización. </h5>

                  <button className="sobre"><Link to='/sobrenosotros' className='linkus'>Sobre nosotros</Link></button>

                </div>

                <div className="ladoderb">
                  <div className="cazul">
                    <img src={Circulos} alt="" className="circulos" />
                  </div>
                
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