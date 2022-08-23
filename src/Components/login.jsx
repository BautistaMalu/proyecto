import React from 'react'
import './login.css';
import {BrowserRouter, Routes,Route,Link} from 'react-router-dom';
function login() {
  return (
    <div className='Logueo'>
      <div className='contenido-login'>
        
        <h1>Logueate :) </h1>

        <h3><Link to='/register'>Registrarse</Link></h3>

      </div>
    </div>
  )
}

export default login