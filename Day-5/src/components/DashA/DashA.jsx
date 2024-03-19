import "./DashA.css";

export const DashA = () => {
  const rechargeHistory = [
    { id: 1, date: "2024-03-18", amount: "₹200", type: "Postpaid", username: "Sha", mobileNumber: "123-456-7890" },
    { id: 2, date: "2024-03-15", amount: "₹100", type: "Prepaid", username: "Gowtham", mobileNumber: "987-654-3210" },
    { id: 3, date: "2024-03-10", amount: "₹150", type: "Data pack purchase", username: "Vijay", mobileNumber: "555-555-5555" },
    { id: 4, date: "2024-03-05", amount: "₹50", type: "Add-on", username: "Sanjay", mobileNumber: "111-222-3333" },
    { id: 5, date: "2024-03-01", amount: "₹300", type: "Prepaid", username: "Dharun", mobileNumber: "444-444-4444" },
  ];

  return (
    <div className="dash">
      <div className="user-details gls">
        <h2>Admin Details</h2>
        <p>Name : Sha</p>
        <p>Mobile Number : 123-456-7890</p>
        <p>Email : sha@joshuva.com</p>
        <p>Admin ID : #1234josh</p>
        <p>Access : View Only</p>
      </div>
      <div className="payment-history gls">
        <h2>Recharge History</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th> 
              <th>Mobile Number</th> 
              <th>Date</th>
              <th>Amount</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {rechargeHistory.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.username}</td>
                <td>{record.mobileNumber}</td>
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
