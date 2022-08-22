import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Login from './Components/login';
import Register from './Components/register';

function App() {
  return (
    <div className="App"> 
      <header className="App-Header">
        <h3> Home </h3>
        <Router>
            <Routes>
              
              <Route path="/login" exact>
                <Login/>
                  <Link to='/register'>Registrarse</Link>
              </Route>

              <Route path="/register" exact>
                <Register/>
                  <Link to='/login'>Iniciar Sesion</Link>
              </Route>
              
            </Routes>
          </Router>
      </header>
     </div>
  );
}

export default App;
