import Navbar from "../Navbar/Navbar"
import { NavLink } from 'react-router-dom';
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
       <span className="logo"><NavLink to="/">.ezPay</NavLink></span>
      <Navbar />
    </header>
  ) 
}

export default Header
