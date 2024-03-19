import { Link } from "react-router-dom";
import "./HomeA.css";

export const HomeA = () => {
  return (
    <div>
        <div className="home">
          <div className="aad">
          <div className="glass-container">
            <Link to="/prepaid-admin" className="glass">
              <h3>Prepaid</h3>
              <ul>
                <li>Instant recharge.</li>
                <li>Flexible plans.</li>
                <li>Cost control.</li>
              </ul>
            </Link>
            <Link to="/postpaid-admin" className="glass">
              <h3>Postpaid</h3>
              <ul>
                <li>Convenient billing.</li>
                <li>Premium features.</li>
                <li>Budget flexibility.</li>
              </ul>
            </Link>
            <Link to="/add-admin" className="glass">
              <h3>Add - ons</h3>
              <ul>
                <li>Enhance your plan.</li>
                <li>Tailored experience.</li>
                <li>Value for money.</li>
              </ul>
            </Link>
            <Link to="/dashboard-admin" className="glass">
              <h3>Dashboard</h3>
              <ul>
              <li>Monitor User Recharge History.</li>
              <li>View Usage Reports.</li>
              <li>Explore Admin Access.</li>
              </ul>
            </Link>
          </div>
          </div>
          <div className="ezpay-text"><span className="ezt">ezPay</span> - Tap, Recharge, Done !!</div>
        </div>
    </div>
  );
};
