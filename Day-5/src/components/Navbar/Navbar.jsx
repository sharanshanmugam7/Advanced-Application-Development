import { NavLink } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar">
    <ul>
      <li className="active"><NavLink to="/admin-login">Admin</NavLink></li>
      <li className="active"><NavLink to="/login">User</NavLink></li>
      <li className="active"><NavLink to="/register">Register</NavLink></li>
      <li className="active"><NavLink to="/login">Logout</NavLink></li>
    </ul>
  </nav>
  )
}

export default Navbar
