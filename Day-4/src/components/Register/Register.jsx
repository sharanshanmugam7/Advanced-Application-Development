import { NavLink } from "react-router-dom";
import "./Register.css"

const Register = () => {
  return (
    <div className="register-container">
    <section className="register-section">
      <div className="register">
        <div className="addr"></div>
        <div className="r-container">
          <div className="r-welcome">
            <h1>Welcome to ezPay</h1>
            <h4>Register now to explore endless digital  experiences.</h4>
            <form className="register-form">
              <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              <label htmlFor="mobile">Mobile Number:</label>
                <input type="tel" id="mobile" name="mobile" pattern="[0-9]*" maxLength="10" required />
              <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
              <button type="submit"><NavLink to="/login">Register</NavLink></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Register
