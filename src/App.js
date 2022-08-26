import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Login from './Components/login/login';
import Register from './Components/register/register';

function App() {
  return (
    <div className="App"> 
      <header className="App-Header">
        <BrowserRouter>
            <Routes>
              
              <Route path="/" exact element={<Login/>}/>
                
              <Route path="/register" exact element={<Register/>}/>
                                
            </Routes>
          </BrowserRouter>
      </header>
      </div>

  );
}

export default App;
