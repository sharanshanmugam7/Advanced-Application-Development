import Navbar from "../Navbar/Navbar"
import { NavLink } from 'react-router-dom';
import "./Header.css";
import Footer from "../Footer/Footer";
const Header = () => {
  return (
    <header className="header">
       <span className="logo"><NavLink to="/">.ezPay</NavLink></span>
      <Navbar />
      <Footer/>
    </header>
  ) 
}

export default Header
