import React, { useState, useEffect } from "react";
import "../styles/expenseTracker.css";

const ExpenseTracker = () => {
  //Initialise variables
  let dailySpentLimit;
  let currentSpend;

  //Setting value. Connect endpoint here to change the values
  dailySpentLimit = 100;
  currentSpend = 25;

  // Calculate the percentage spent
  let percentageSpent = (currentSpend / dailySpentLimit) * 100;

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emails, setEmails] = useState([]);
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    // Load saved items from local storage when the component mounts
    const savedEmails = JSON.parse(localStorage.getItem("emails")) || [];
    const savedPhones = JSON.parse(localStorage.getItem("phones")) || [];
    setEmails(savedEmails);
    setPhones(savedPhones);
  }, []);

  const handleAddEmail = () => {
    if (!email.trim()) {
      alert("Please add an email.");
    } else if (emails.length >= 4) {
      alert("You cannot add more than four emails.");
    } else {
      const updatedEmails = [...emails, email];
      setEmails(updatedEmails);
      localStorage.setItem("emails", JSON.stringify(updatedEmails));
      setEmail("");
    }
  };

  const handleAddPhone = () => {
    if (emails.length === 0) {
      alert("Please add an email before adding a phone number.");
      return;
    }

    if (phones.length >= 4) {
      alert("You cannot add more than four phone numbers.");
    } else {
      const updatedPhones = [...phones, phone];
      setPhones(updatedPhones);
      localStorage.setItem("phones", JSON.stringify(updatedPhones));
      setPhone("");
    }
  };

  const handleRemoveEmail = (index) => {
    const updatedEmails = [...emails];
    updatedEmails.splice(index, 1);
    setEmails(updatedEmails);
    localStorage.setItem("emails", JSON.stringify(updatedEmails));
  };

  const handleRemovePhone = (index) => {
    const updatedPhones = [...phones];
    updatedPhones.splice(index, 1);
    setPhones(updatedPhones);
    localStorage.setItem("phones", JSON.stringify(updatedPhones));
  };

  return (
    <>
      <div className="expense-tracker-container">
        <div className="spend-info-container">
          <h2>Daily Spend Limit</h2>
          <div className="text-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="daily-spend-limit">
            <span className="label">Daily spend limit:</span>
            <span className="amount">{`£${dailySpentLimit.toFixed(2)}`}</span>
          </div>
        </div>
        <div className="spend-limit-container">
          <div className="progress-container">
            <div className="spent-limit-amount">
              <p>{`£${currentSpend.toFixed(2)}`}</p>
              <p>{`£${dailySpentLimit.toFixed(2)}`}</p>
            </div>
            <div className="progress">
              <div
                className="progress-fill"
                style={{ width: `${percentageSpent}%`, backgroundColor: "red" }}
              ></div>
            </div>
            <div className="progress-label">
              <p>Today's spend: {`${percentageSpent}`}% of limit</p>
              <p>Spend limit</p>
            </div>
          </div>
        </div>
      </div>
      <>
        <div className="notification-container">
          <h3>Notification settings</h3>
          <div className="email">
            <label>Email:</label>
            <input
              className="input"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn" onClick={handleAddEmail}>
              Add Email
            </button>
          </div>

          <div className="phone">
            <label>Phone Number:</label>
            <input
              className="input"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button className="btn" onClick={handleAddPhone}>
              Add Phone Number
            </button>
          </div>

          <div>
            <p>Emails (up to 4):</p>
            <ul>
              {emails.map((email, index) => (
                <li key={index}>
                  {email}
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveEmail(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p>Phone Numbers (up to 4):</p>
            <ul>
              {phones.map((phone, index) => (
                <li key={index}>
                  {phone}
                  <button
                    className="remove-btn"
                    onClick={() => handleRemovePhone(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    </>
  );
};

export default ExpenseTracker;
