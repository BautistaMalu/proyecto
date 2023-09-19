import React from 'react'
import Logo from '../login/Logo.png';
import {Link, useParams, useNavigate} from 'react-router-dom';
import './header3.css';
import Fotoej from '../header2/Ejemplo.png';
import { useState, useEffect } from 'react'
import Bajada from './bajada.png';
import LogOut from '../logout/logout';

function Header3() {

  const [buttonlogout, setButtonLogout] = useState(false);
  const [loggedUserInfo, setLoggedUserInfo] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const getUserInfo = async () => {
    const ApiURL= "https://groupit-api.vercel.app/auth/getSession"

    const requestConfig = {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    };

    const response = await fetch(ApiURL, requestConfig);

    const data = await response.json();

    return data;
  };

  useEffect(() => {
    getUserInfo().then((data) => {
      setLoggedUserInfo(data.user.nombreUsuario);
    });
  }, []);


  return (

    <div className="todoheader3">
            <div className='header'>

                <div className="ladoizq">

                    <div className="logo"> <img src={Logo} alt="" /> </div>

                </div>

                <div className="ladoder">
                    <div className="links">
                        <Link to={`/info/${id}`} className='us'>Lista de invitados</Link>
                        <Link to='/eventos' className='inicio'>Eventos</Link>            
                        <Link to={`/lista/${id}`} className='contacto'>Items a traer</Link>
                        <img src={Fotoej} alt="" className="foto" />
                        <h3 className="nombreus">{loggedUserInfo}</h3>
                        <button className="desloguearse" onClick={() => setButtonLogout(true)}> <img src={Bajada} alt="" className="desloguearseimg" /></button>  
                        <LogOut trigger={buttonlogout} setTrigger={setButtonLogout}></LogOut>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Header3