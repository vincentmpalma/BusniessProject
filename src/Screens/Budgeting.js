import React, { Component } from "react";
import "../Styles/Budgeting.css"; // Use the dedicated CSS file
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export class Budgeting extends Component {
  render() {
    return (
      <div className="budgeting-page">
        <Header />
        <main className="budgeting-main">
          <div className="faq-header">
            <h2>Budgeting</h2>
          </div>

          <div className="budgeting-container">
            {/* Description and Image on the Left */}

            <div className="budgeting-description">
              <div className="description-image">
                <img src="/budgeting_pic.jpg" alt="Budgeting Illustration" />
              </div>
              <p>
                Budgeting is a monthly financial plan that involves tracking
                income and expenses, allocating funds for essential expenses,
                and managing debt effectively. It helps in tracking income,
                managing debt, prioritizing spending, reducing impulsive
                purchases, and providing peace of mind by ensuring financial
                control and goal achievement. Creating and maintaining a budget
                can be a complex task, but with proper resources and planning,
                you can start building a more secure financial future for you
                and your family today. It can be overwhelming but never hesitate
                to get help from experts who can help out with how to budget
                your money.
              </p>

              <h3 className="budgeting-title">Why You Should Make a Budget</h3>

              <ol>
                <li>It Helps You Work Toward Long-Term Goals</li>
                <li> It Can Keep You from Overspending</li>
                <li>It Can Make Saving for Retirement Easier</li>
                <li>It Helps You Prepare for Emergencies</li>
                <li> It Can Reveal Spending Habits</li>
              </ol>
            </div>

            {/* Steps on the Right */}
            <div className="budgeting-steps">
              <h4 className="budgeting-title">How to budget money:</h4>
              <ul>
                <li>
                  <span className="steps-nums">Step 1:</span> Determine Your
                  Income To create a budget, first, determine your income
                  sources. This includes your take-home salary and other
                  secondary income sources. Arrange the total amount available
                  to include in your budget, ensuring you have enough money to
                  cover all expenses.
                </li>
                <li>
                  <span className="steps-nums">Step 2:</span> Assess Your
                  Expenses To understand your current financial situation,
                  divide your expenses into fixed and variable categories. Fixed
                  expenses are recurring expenses like rent, insurance, car
                  payments, gym memberships, and subscriptions. Variable
                  expenses are monthly spending like food, utilities, clothes,
                  entertainment, and personal care. Combine these expenses to
                  determine your spending patterns and make necessary
                  adjustments.
                </li>
                <li>
                  <span className="steps-nums">Step 3:</span> Aim for the right
                  allocation To manage your expenses, for instance, a 50/30/20
                  budget allocates 50% of the income to needs, 30% to wants, and
                  20% to savings. On the other hand, a 70/20/10 budget allocates
                  70% of the income to necessities, 20% to investments, and 10%
                  to debts or donations.
                </li>
                <li>
                  <span className="steps-nums">Step 4:</span> Track and Adjust
                  Your Spending Tracking expenses helps understand your
                  financial situation, and identify areas of overspending or
                  over-earning. Cut back on fixed and variable expenses, such as
                  unused services or work lunches. Include essential purchases
                  in your budget to avoid guilt.
                </li>
                <li>
                  <span className="steps-nums">Step 5:</span> Remind Yourself of
                  Your Long-Term Goals ​​It's crucial to revisit it every three
                  to six months to assess categories and goals, decide whether
                  to allocate more money, cut back, or expand it, and prevent it
                  from standing still.
                </li>
              </ul>
            </div>
          </div>

          <div className="bottom-button-container">
            <Link to="/templates" className="bottom-button">
              Go to Templates
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Budgeting;
