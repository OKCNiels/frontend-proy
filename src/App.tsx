
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contacto from './Pages/Contacto';
import AboutMe from './Pages/AboutMe';
import Profile from './Pages/Profile';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/contact" >Contacto</Link>
              </li>
              <li>
                <Link to="/about-me" >About Me</Link>
              </li>
              <li>
                <Link to="/profile" >Profile</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path='/contact' element = {<Contacto></Contacto>}></Route>
            <Route path='/about-me' element = {<AboutMe></AboutMe>}></Route>
            <Route path='/profile/:name' element = {<Profile></Profile>}></Route>
          </Routes>
        </Router>

        
      </header>
    </div>
  )
}

export default App
