import React from 'react'
import './login.css';
import {Link} from 'react-router-dom';
import Logo from './Logo.png';
import Foto from './Fotoprueba.png';
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;*/

function login() {

  const handlesubmit=(event)=>{
    event.preventDefault();
  }

  return (
    <div className='Logueo'>
            
      <div className="imagen"> <img src={Logo} alt="" /> </div>

      <div className='contenido-login'>

        <div className='ladoizq'>
        
          <h1 className='login'> Bienvenido de vuelta <br/> </h1>

          <h3 className="ingrese"> Por favor ingrese sus datos <br/> </h3>

          <form onSubmit={handlesubmit}>

            <label for ="email1">Email</label>

              <input placeholder="Ingrese su email" type="email" id="email1"/>

            <label for="psw1">Contraseña</label>

              <input placeholder="Ingrese su contraseña" type="password" id="psw1"/>

              <Link to='/olvidemicontrasenia' id='linkolvi'>¿Olvidaste tu contraseña?</Link>

              <button type="submit" id="ingreso">Ingresar</button>

              <button type='submit' id='google'> Ingresa con google</button>

          </form>

            <div className="link">
              <h3 id='registrolink'>¿No tenes cuenta? <Link to='/register'>Registrate</Link></h3>
            </div>

        </div>

        <div className='ladoder'>
        <div className="Foto"> <img src={Foto} alt="" /> </div>
        </div>

      </div>

    </div>
  )
}

export default login