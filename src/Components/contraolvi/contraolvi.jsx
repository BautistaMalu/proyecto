import React from 'react';
import './contraolvi.css';
import Logo from '../login/Logo.png';
import Foto from '../login/Fotoprueba.png';
import {Link} from 'react-router-dom';

function contraolvi() {
        
    const handlesubmit=(event)=>{
            event.preventDefault();
        }

    return (


    <div className="Contraolvi">

        <div className="imagen"> <img src={Logo} alt="" /> </div>

        <div className='contenido-contra'>

        <div className='ladoizq'>
        
            <h1 className='recordar'> No recuerdas tu contraseña <br/> </h1>

            <h3 className="recuperar"> Te enviamos un mail para recuperarla <br/> </h3>

            <form onSubmit={handlesubmit}>

            <label for ="email1">Email</label>

                <input placeholder="Ingrese su email" type="email" id="email1"/>

                <button type="submit" id="recuperarcontra">Recuperar contraseña</button>

            </form>

        </div>

        <div className='ladoder'>
        <div className="Foto"> <img src={Foto} alt="" /> </div>
        </div>

        </div>

    </div>
  )
}

export default contraolvi