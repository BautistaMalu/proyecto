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

        

        <div className='contenido-contra'>

        <div className='ladoizq'>

            <img src={Logo} alt="" className='imagen'/>

            <h1 className='recordar'> No recuerdas tu contraseña <br/> </h1>

            <h3 className="recuperar"> Te enviamos un mail para recuperarla <br/> </h3>

            <form onSubmit={handlesubmit}>

            <div className="emaill">
                <label for ="email1" className='labelemail'>Email</label>

                <input placeholder="Ingrese su email" type="email" className="email1"/>
            </div>

                <button type="submit" className="recuperarcontra">Recuperar contraseña</button>

            </form>

        </div>

        <div className='ladoder'>
        <img src={Foto} alt="" className='foto'/> 
        </div>

        </div>

    </div>
  )
}

export default contraolvi