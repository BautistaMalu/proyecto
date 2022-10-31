import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Login from './Components/login/login';
import Register from './Components/register/register';
import Home from './Components/home/home';
import Contacto from './Components/contacto/contacto';
import Sobrenosotros from './Components/aboutus/aboutus';
import Contraolvi from "./Components/contraolvi/contraolvi";
import Eventos from "./Components/eventos/eventos";
import Infoeventos from "./Components/infoeventos/infoeventos";
import Lista from "./Components/lista/lista";
import Proovedores from './Components/proovedores/proovedores';
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

              <Route path="/olvidemicontrasenia" exact element={<Contraolvi/>}/>

              <Route path="/eventos" exact element={<Eventos/>}/>

              <Route path="/info/:id" exact element={<Infoeventos/>}/>

              <Route path="/lista/:id" exact element={<Lista/>}/>

              <Route path="/proovedores" exact element={<Proovedores/>}/>

            </Routes>
          </BrowserRouter>
      </header>
      </div>

  );
}

export default App;
