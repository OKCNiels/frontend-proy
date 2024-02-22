
import { NavLink, useNavigate } from 'react-router-dom'
import { finalizar } from "../Services/Auth/Login";
import { useLocalStorage } from "react-use"

const NavigateApp = () => {
    const [token, setToken] = useLocalStorage("token");
    const navigate = useNavigate();
    
    const sessionFinalizada = async () => {
        await finalizar(token);
        localStorage.removeItem('usuario');
        localStorage.removeItem('token');
        navigate('/login');
        // setUser(response.data.data);
        
    }
    return (
        <div>
            <NavLink to="/about-me">About</NavLink>|
            <NavLink to="/profile/:name">Profile</NavLink>|
            <button className='btn btn-sm btn-link' onClick={()=> sessionFinalizada()}>Salir</button>
        </div>
    )
}

export default NavigateApp