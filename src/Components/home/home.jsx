import React from 'react'
/*import {Link} from 'react-router-dom'*/
import './home.css';
import Header from '../header/header';
import Footer from '../footer/footer';
function home() {
  return (

    <div className='Home'>

        <div className="header">
          <Header/>
        </div>

        <div className="contenidohome">

          <div className="azul">
            
          </div>

        </div>

        <div className="footer">
          <Footer/>
        </div>


    </div>
  )
}

export default home