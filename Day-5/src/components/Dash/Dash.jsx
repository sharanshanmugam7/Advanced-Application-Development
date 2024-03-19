import "./Dash.css";

export const Dash = () => {
  const rechargeHistory = [
    { id: 1, date: "2024-03-18", amount: "₹200", type: "Postpaid" },
    { id: 2, date: "2024-03-15", amount: "₹100", type: "Prepaid" },
    { id: 3, date: "2024-03-10", amount: "₹150", type: "Data pack purchase" },
    { id: 4, date: "2024-03-05", amount: "₹50", type: "Add-on" },
    { id: 5, date: "2024-03-01", amount: "₹300", type: "Prepaid" },
  ];

  return (
    <div className="dash">
      <div className="user-details gls">
      <h2>User Details</h2>
        <p>Name : Sha</p>
        <p>Mobile Number : 123-456-7890</p>
        <p>Email : sha@joshuva.com</p>
        <p>Current Plan : Prepaid</p>
        <p>Price : ₹700</p>
        <p>Validity : 84 days</p>
      </div>
      <div className="payment-history gls">
        <h2>Payment History</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {rechargeHistory.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.date}</td>
                <td>{record.amount}</td>
                <td>{record.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
