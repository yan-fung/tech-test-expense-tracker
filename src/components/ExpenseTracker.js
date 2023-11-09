import React from "react";
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
          <div class="daily-spend-limit">
            <span class="label">Daily spend limit</span>
            <span class="amount">{`£${dailySpentLimit.toFixed(2)}`}</span>
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
              <p>Today spent {`£${percentageSpent}`}% of limit</p>
              <p>Spend limit</p>
            </div>
          </div>
        </div>
      </div>
      <>
        <div>Notification settings</div>
      </>
    </>
  );
};

export default ExpenseTracker;
