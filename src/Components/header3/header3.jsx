import React from 'react'
import Logo from '../login/Logo.png';
import {Link} from 'react-router-dom';
import './header3.css';
import Fotoej from '../header2/Ejemplo.png';
function header3() {
  return (

    <div className="todoheader3">
            <div className='header'>

                <div className="ladoizq">

                    <div className="logo"> <img src={Logo} alt="" /> </div>

                </div>

                <div className="ladoder">
                    <div className="links">
                        <Link to='/infoeventos' className='us'>Lista de invitados</Link>
                        <Link to='/eventos' className='inicio'>Mis eventos</Link>            
                        <Link to='/lista' className='contacto'>Items a traer</Link>
                        <img src={Fotoej} alt="" className="foto" />
                        <h3 className="nombreus">Nombre de Ejemplo</h3>
                    </div>


                </div>

            </div>

    </div>
  )
}

export default header3