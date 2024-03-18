import { NavLink } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <div>
        <div className="home">
          <div className="aad">
          <div className="glass-container">
            <NavLink to="/prepaid" className="glass prepaid">
              <h3>Prepaid</h3>
              <ul>
                <li>Instant recharge.</li>
                <li>Flexible plans.</li>
                <li>Cost control.</li>
              </ul>
            </NavLink>
            <NavLink to="postpaid" className="glass postpaid">
              <h3>Postpaid</h3>
              <ul>
                <li>Convenient billing.</li>
                <li>Premium features.</li>
                <li>Budget flexibility.</li>
              </ul>
            </NavLink>
            <NavLink to="add" className="glass addons">
              <h3>Addons</h3>
              <ul>
                <li>Enhance your plan.</li>
                <li>Tailored experience.</li>
                <li>Value for money.</li>
              </ul>
            </NavLink>
            <div className="glass others">
              <h3>Others</h3>
              <ul>
              <li>Explore more options.</li>
              <li>Discover new offerings.</li>
              <li>Stay updated with latest deals.</li>
              </ul>
            </div>
          </div>
          </div>
          <div className="ezpay-text"><span className="ezt">ezPay</span> - Tap, Recharge, Done !!</div>
        </div>
    </div>
  );
};
