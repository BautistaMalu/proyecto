import React, { useState } from 'react'
import './login.css';
import { Link } from 'react-router-dom';
import Logo from './Logo.png';
import Foto from './Fotoprueba.png';
import { useNavigate } from 'react-router-dom';
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;*/

const localUrl = "http://localhost:8080"
const railwayUrl = "https://GroupIT-API.up.railway.app"

function Login() {
  const [loginData, setLoginData] = React.useState({});

  const navigate = useNavigate();

  const handlesubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const login = async () => {
    const ApiURL = railwayUrl + "/auth/login"

    const requestConfig = {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData)
    };
    
    const response = await fetch(ApiURL, requestConfig);

    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      navigate('/eventos');
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className='Logueo'>
            
      <div className="imagen"> <img src={Logo} alt="" /> </div>

      <div className='contenido-login'>

        <div className='ladoizq'>
        
          <h1 className='login'> Bienvenido de vuelta <br/> </h1>

          <h3 className="ingrese"> Por favor ingrese sus datos <br/> </h3>

          <form onSubmit={handlesubmit}>

            <label for ="email1">Email</label>

              <input onChange={handleInputChange} placeholder="Ingrese su email" id="email1" name="nombreUsuario" />

            <label for="psw1">Contraseña</label>

              <input onChange={handleInputChange} placeholder="Ingrese su contraseña" type="password" id="psw1" name="password" />

              <Link to='/olvidemicontrasenia' id='linkolvi'>¿Olvidaste tu contraseña?</Link>

              <button type="submit" id="ingreso" onClick={() => login()}>Ingresar</button>

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

export default Login