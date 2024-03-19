import { NavLink } from "react-router-dom"
import "./Addons.css"

export const Addons = () => {

  const plans = [
    {
      name: "Plan 1",
      price: "₹199", 
      speed: "1 GB/Day",
      validity: "28 Days",
      about: "Ideal for light data users.",
    },
    {
      name: "Plan 2",
      price: "₹349",
      speed: "1.5 GB/Day",
      validity: "56 Days",
      about: "Suitable for moderate data users.",
    },
    {
      name: "Plan 3",
      price: "₹499",
      speed: "2 GB/Day",
      validity: "84 Days",
      about: "Perfect economy plan for users.",
    },
    {
      name: "Plan 4",
      price: "₹599", 
      speed: "3 GB/Day",
      validity: "28 Days",
      about: "Ideal for light data users.",
    },
    {
      name: "Plan 5",
      price: "₹649",
      speed: "3 GB/Day",
      validity: "56 Days",
      about: "Suitable for moderate data users.",
    },
    {
      name: "Plan 6",
      price: "₹899",
      speed: "4.5 GB/Day",
      validity: "84 Days",
      about: "Perfect for heavy data users.",
    },

  ];
  return (
    <div className="addons">
      <div className="addons-container">
        <div className="glasscpa">
          <NavLink to="/add" className="addons-glass">
            <h3>Addons</h3>
          </NavLink>
        </div>
        <section className="preplan-details">
          {plans.map((plan, index) => (
            <div key={index} className="preplan-glass">
              <div className="plan-details">
              <div className="plan-header">
                <h1>{plan.price}</h1>
                <button className="recharge-button">Recharge</button>
              </div>
                <div className="content">
                  <span>
                    <p>Data</p>
                    {plan.speed}
                  </span>
                  <span>
                    <p>Validity</p>
                    {plan.validity}
                  </span>
                </div>
                <div className="ab">
                  {plan.about}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      </div>
  )
}
