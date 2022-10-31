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
            
      

      <div className='contenido-login'>

        <div className='ladoizq'>

          <img src={Logo} alt=""  className='imagen'/> 
        
          <h1 className='login'> Bienvenido de vuelta <br/> </h1>

          <h3 className="ingrese"> Por favor ingrese sus datos <br/> </h3>
          <div className="labelsyinputslogin">
          <form onSubmit={handlesubmit}>
            <div className="emaill">
            <label for ="email1" className='labelemail1'>Email</label>

              <input onChange={handleInputChange} placeholder="Ingrese su email" className="email1" name="nombreUsuario" />
            </div>
            <div className="psww">
              <label for="psw1" className='labelpsw1'>Contraseña</label>

              <input onChange={handleInputChange} placeholder="Ingrese su contraseña" type="password" className="psw1" name="password" />
            </div>
            <div className="linkybtn">
              <Link to='/olvidemicontrasenia' className='linkolvi'>¿Olvidaste tu contraseña?</Link>

              <button type="submit" className="ingreso" onClick={() => login()}>Ingresar</button>
            </div>

          </form>
          </div>
            <div className="link">
              <h3 className='registrolink'>¿No tenes cuenta? <Link to='/register' className='linkregistro'>Registrate</Link></h3>
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