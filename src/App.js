import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Login from './Components/login/login';
import Register from './Components/register/register';
import Home from './Components/home/home';
import Contacto from './Components/contacto/contacto';
import Sobrenosotros from './Components/aboutus/aboutus';
function App() {
  return (
    <div className="App"> 
      <header className="App-Header">
        <BrowserRouter>
            <Routes>
              
              <Route path='/' exact element={<Home/>}/>

              <Route path="/login" exact element={<Login/>}/>
                
              <Route path="/register" exact element={<Register/>}/>

              <Route path="/sobrenosotros" exact element={<Sobrenosotros/>}/>

              <Route path="/contacto" exact element={<Contacto/>}/>
                                
            </Routes>
          </BrowserRouter>
      </header>
      </div>

  );
}

export default App;
