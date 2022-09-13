import React from 'react'
import {Link} from 'react-router-dom';
import './footer.css';
import LineaIzq from './LineaIzq.png';
import LineaDer from './LineaDer.png';
import Facebook from './Facebook.png';
import Instagram from './Instagram.png';
import Discord from './Discord.png';
function footer() {
  return (

    <div className="footer">

    <div className="contenido-footer">

        <div className="imagenes">

          <img src={LineaIzq} alt="" id="LineaIzq" />
          <img src={Facebook} alt="" id="Facebook" />
          <img src={Instagram} alt="" id="Instagram" />
          <img src={Discord} alt="" id="Discord" />
          <img src={LineaDer} alt="" id="LineaDer" />

        </div>

        <div className="texto">

          <h1 id="Nombre">GroupIT</h1>
          <h6 id="Copy">Copyright @ 2022</h6>

        </div>

        <div className="links">

         <Link to='/sobrenosotros' className='us'>Sobre nosotros</Link>
         <Link to='/' className='inicio'>Inicio</Link>  
         <Link to='/contacto' className='contacto'>Contactanos</Link>

        </div>

    </div>

    </div>

  )
}

export default footer