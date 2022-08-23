import './App.css';
import {BrowserRouter, Routes,Route,Link} from 'react-router-dom';
import Login from './Components/login';
import Register from './Components/register';

function App() {
  return (
    <div className="App"> 
      <header className="App-Header">
        <h3> Home </h3>
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
