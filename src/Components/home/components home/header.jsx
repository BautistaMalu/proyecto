import React from 'react';
import Logo from '../../login/Logo.png';
import {Link} from 'react-router-dom';
import './header.css';

function header() {
  return (

    <div className='header'>

        <div className="ladoizq">

            <div className="logo"> <img src={Logo} alt="" /> </div>

        </div>

        <div className="ladoder">
            <div className="links">
                <Link to='/sobrenosotros' className='us'>Sobre nosotros</Link>
                <Link to='/' className='inicio'>Volver al inicio</Link>            
                <Link to='/contacto' className='contacto'>Contactanos</Link>
            </div>

            <div className="botones">
                <button className='logeo'><Link to='/login' className='linklogeo'>Iniciar sesión</Link></button>
                <button className='registro'><Link to='/register' className='linkregistro' >Registrarme</Link></button>
            </div>

        </div>

    </div>
  
    )
}

export default header