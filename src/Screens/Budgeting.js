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
                and your family today.
              </p>
            </div>

            {/* Steps on the Right */}
            <div className="budgeting-steps">
              <ul>
                <li>
                  <span className="steps-nums">Step 1:</span> Determine Your
                  Income. To create a budget, first, determine your income
                  sources. This includes your take-home salary and other
                  secondary income sources.
                </li>
                <li>
                  <span className="steps-nums">Step 2:</span> Assess Your
                  Expenses. Divide your expenses into fixed and variable
                  categories to understand your spending patterns.
                </li>
                <li>
                  <span className="steps-nums">Step 3:</span> Aim for the Right
                  Allocation. For example, a 50/30/20 budget allocates 50% of
                  income to needs, 30% to wants, and 20% to savings.
                </li>
                <li>
                  <span className="steps-nums">Step 4:</span> Track and Adjust
                  Your Spending. Regularly tracking expenses helps identify
                  areas of overspending and cut back as necessary.
                </li>
                <li>
                  <span className="steps-nums">Step 5:</span> Remind Yourself of
                  Your Long-Term Goals. Revisit your budget periodically to make
                  adjustments and ensure alignment with your goals.
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
