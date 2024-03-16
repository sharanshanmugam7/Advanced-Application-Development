import { useEffect, useState } from "react";
import "./Login.css"
import Footer from "../Footer/Footer";

const Login = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setShowFooter(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className="login">
        Login
      </div>
      {showFooter && <Footer />}
    </div>
  )
}

export default Login
