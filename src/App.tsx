
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from './Pages/Contacto';
import AboutMe from './Pages/AboutMe';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import Error404 from './Pages/Error/Error404';
import Home from './Pages/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/login' element = {<Login></Login>}></Route>
        <Route path='/contact' element = {<Contacto></Contacto>}></Route>
        <Route path='/about-me' element = {<AboutMe></AboutMe>}></Route>
        <Route path='/profile/:name' element = {<Profile></Profile>}></Route>
        <Route path='/*' element = {<Error404></Error404>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
