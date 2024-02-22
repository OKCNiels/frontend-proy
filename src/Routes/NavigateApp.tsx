
import { NavLink } from 'react-router-dom'

const NavigateApp = () => {
  return (
    <div>
        <NavLink to="/about-me">About</NavLink>
        <NavLink to="/profile/:name">Profile</NavLink>
    </div>
  )
}

export default NavigateApp