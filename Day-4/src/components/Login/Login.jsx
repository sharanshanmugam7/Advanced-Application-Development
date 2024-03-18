import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <section className="login-section">
        <div className="login">
          <p className="add">
            Manage your Mobile Recharge with 
          </p>
          <div className="type">the ezPay app.</div>
          <ul className="recharge-options">
            <li>Postpaid</li>
            <li>Prepaid</li>
            <li>Addons</li>
            <li>Others</li>
          </ul>
          <div className="container">
            <div className="welcome">
              <h1>Welcome to ezPay</h1>
              <h4>Log in to unlock a world of digital experiences.</h4>
              <form className="login-form">
                <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" required />
                <label htmlFor="mobile">Mobile Number:</label>
                  <input type="tel" id="mobile" name="mobile" pattern="[0-9]*" maxLength="10" required />
                <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name="password" required />
                <button type="submit"><NavLink to="/">Login</NavLink></button>
              </form>
              <p className="register-link">
                Dont have an account? <NavLink to="/register">Register here</NavLink>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
