import { NavLink } from "react-router-dom"
import "./AddonsA.css"
import { useState } from "react";

export const AddonsA= () => {

  const [plans, setPlans] = useState([
    {
      id: 1,
      name: "Plan 1",
      price: "₹199", 
      speed: "1 GB/Day",
      validity: "28 Days",
      about: "Ideal for light data users.",
    },
    {
      id: 2,
      name: "Plan 2",
      price: "₹349",
      speed: "1.5 GB/Day",
      validity: "56 Days",
      about: "Suitable for moderate data users.",
    },
    {
      id: 3,
      name: "Plan 3",
      price: "₹499",
      speed: "2 GB/Day",
      validity: "84 Days",
      about: "Perfect economy plan for users.",
    },
    {
      id: 4,
      name: "Plan 4",
      price: "₹599", 
      speed: "3 GB/Day",
      validity: "28 Days",
      about: "Ideal for light data users.",
    },
    {
      id: 5,
      name: "Plan 5",
      price: "₹649",
      speed: "3 GB/Day",
      validity: "56 Days",
      about: "Suitable for moderate data users.",
    },
    {
      id: 6,
      name: "Plan 6",
      price: "₹899",
      speed: "4.5 GB/Day",
      validity: "84 Days",
      about: "Perfect for heavy data users.",
    },

  ]);

  const deletePlan = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };
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
                <button
                    className="delete-button"
                    onClick={() => deletePlan(plan.id)}>
                    Delete
                </button>
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
