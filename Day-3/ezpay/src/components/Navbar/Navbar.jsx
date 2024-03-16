import { NavLink } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar">
    <ul>
      <li className="active"><NavLink to="/login">Login</NavLink></li>
      <li className="active"><NavLink to="/register">Register</NavLink></li>
    </ul>
  </nav>
  )
}

export default Navbar
