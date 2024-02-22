
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Home from './Pages/Home';
import RouterApp from './Routes/RouterApp';

function App() {
  
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/login' element = {<Login></Login>}></Route>
        <Route path='/*' element = {<RouterApp></RouterApp>}></Route>        
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
