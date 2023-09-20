import React from 'react'
import './logout.css'
import Puerta from './Puerta.png'
import { Link } from 'react-router-dom';

function logout(props2) {
  const handleLogout = async () => {
    await fetch("https://groupit-api.vercel.app/auth/logout");
    return;
  }

  return (props2.trigger) ? (
    <div className="todologout">
        <div className="salir">
          <Link to={"/"}><button className="salirbtn" onClick={handleLogout}> <img src={Puerta} alt="" className="puerta" /> Cerrar Sesión </button></Link>
            {props2.children}
        </div>
    </div>
  ) : "";
}

export default logout