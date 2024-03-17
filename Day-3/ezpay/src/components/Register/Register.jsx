import "./Register.css"

const Register = () => {
  return (
    <div className="register-container">
    <section className="register-section">
      <div className="register">
        <p className="addr">
          Manage your Mobile Recharge with the ezPay app
        </p>
        <ul className="recharge-options-r">
          <li>Postpaid</li>
          <li>Prepaid</li>
          <li>Addons</li>
          <li>Others</li>
        </ul>
        <div className="r-container">
          <div className="r-welcome">
            <h1>Welcome to ezPay</h1>
            <h4>Log in to unlock a world of digital experiences.</h4>
            <form className="register-form">
              <label htmlFor="mobile">Mobile Number:</label>
                <input type="tel" id="mobile" name="mobile" pattern="[0-9]*" maxLength="10" required />
              <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Register
