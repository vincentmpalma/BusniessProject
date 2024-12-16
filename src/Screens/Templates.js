import React, { Component } from "react";
import "../Styles/Templates.css"; // Dedicated CSS file for Templates page
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export class Templates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Future Value Calculator States
      inputAmountFV: "0.00",
      annualRate: "0.00",
      numberOfYears: "0.00",
      futureValue: null,

      // NPER Calculator States
      outstandingBalance: "0.00",
      apr: "0.00",
      monthlyPayment: "0.00",
      numberOfPeriods: null,

      // PMT Calculator States
      pmtGoal: "0.00",
      pmtPeriods: "0", // Default to 1 to avoid division by zero
      pmtRate: "0.00",
      calculatedPMT: null,
    };
  }

  // Future Value Calculator Methods
  handleInputChangeFV = (e, field) => {
    const value = e.target.value;
    this.setState({ [field]: value });
  };

  calculateFutureValue = () => {
    const { inputAmountFV, annualRate, numberOfYears } = this.state;
    const principal = parseFloat(inputAmountFV) || 0;
    const rate = parseFloat(annualRate) / 100 || 0;
    const years = parseFloat(numberOfYears) || 0;
    const futureValue = principal * Math.pow(1 + rate, years);
    this.setState({ futureValue: futureValue.toFixed(2) });
  };

  // NPER Calculator Methods
  handleInputChangeNPER = (e, field) => {
    const value = e.target.value;
    this.setState({ [field]: value });
  };

  calculateNumberOfPeriods = () => {
    const { outstandingBalance, apr, monthlyPayment } = this.state;

    const balance = parseFloat(outstandingBalance) || 0;
    const monthlyRate = parseFloat(apr) / 100 / 12 || 0;
    const payment = parseFloat(monthlyPayment) || 0;

    if (monthlyRate > 0 && payment > 0 && payment > balance * monthlyRate) {
      const numberOfPeriods =
        Math.log(1 - (balance * monthlyRate) / payment) /
        Math.log(1 + monthlyRate);

      this.setState({ numberOfPeriods: Math.ceil(-numberOfPeriods) });
    } else {
      this.setState({ numberOfPeriods: "Invalid input" });
    }
  };

  calculatePMT = () => {
    const { pmtGoal, pmtPeriods, pmtRate } = this.state;

    // Parse inputs
    const goal = parseFloat(pmtGoal);
    const periods = parseInt(pmtPeriods, 10);
    const rate = parseFloat(pmtRate) / 100;

    // Validate inputs
    if (
      isNaN(goal) ||
      isNaN(periods) ||
      isNaN(rate) ||
      periods <= 0 ||
      goal <= 0
    ) {
      this.setState({ calculatedPMT: "Invalid input" });
      return;
    }

    // Payment made at the beginning of the period
    const type = 1;

    // Calculate PMT
    const pmt =
      rate > 0
        ? (rate * goal) /
          ((1 + rate * type) * (Math.pow(1 + rate, periods) - 1))
        : goal / periods;

    this.setState({ calculatedPMT: pmt.toFixed(2) });
  };

  render() {
    const {
      inputAmountFV,
      annualRate,
      numberOfYears,
      futureValue,
      outstandingBalance,
      apr,
      monthlyPayment,
      numberOfPeriods,
      pmtGoal,
      pmtPeriods,
      pmtRate,
      calculatedPMT,
    } = this.state;

    return (
      <div className="templates-page">
        <Header />
        <main className="templates-main">
          <div className="faq-header">
            <h2>Templates</h2>
          </div>

          {/* Download Files Section */}
          <div className="file-downloads-grid">
            <div className="file-download-item">
              <h3>Zero-Based Budget Template</h3>
              <div className="image-wrapper">
                <img
                  src="/budgeting2.png"
                  alt="Zero-Based Budget Template Preview"
                  className="budgeting-image"
                />
              </div>
              <p>
                To easily use the zero-based budget template, start by listing
                and inserting your sources of income for the month. Be sure to
                allocate the correct amount of funds needed for specific bills
                or expenses, such as rent, groceries, or debt repayment.
                Prioritize said essential expenses first, then allocate
                remaining funds to wants and needs such as outings, shopping, or
                savings goals. Regularly update the budget with actual spending
                to stay on track and adjust as needed throughout the month!
              </p>
              <a
                href="/zero-based-budget-worksheet.xlsx"
                download="Zero-Based Budget Template"
                className="download-button"
              >
                Download Template
              </a>
            </div>

            <div className="file-download-item">
              <h3>Savings Goal Tracker</h3>
              <div className="image-wrapper">
                <img
                  src="/savings-goal-tracker.png"
                  alt="Savings Goal Tracker Preview"
                  className="budgeting-image"
                />
              </div>
              <p>
                When considering making a savings goal, start by defining a
                clear savings target, such as for an emergency fund, a vacation,
                or savings for personal needs like a car or house. Input the
                total amount needed, then any amount already set aside to start
                your savings project. Calculate how much money to set aside each
                month or after every paycheck to reach your goal on time. Make
                sure to record your progress regularly and watch your percentage
                reach 100%!
              </p>
              <a
                href="/savings-goal-tracker.xlsx"
                download="Savings Goal Tracker"
                className="download-button"
              >
                Download Tracker
              </a>
            </div>
          </div>

          {/* Calculators Section */}
          <div className="calculators-grid">
            <div className="calculator-item">
              <h3>Future Value Calculator</h3>
              <div className="form-container">
                <label>Initial Amount:</label>
                <input
                  type="number"
                  step="0.01"
                  value={inputAmountFV}
                  onChange={(e) => this.handleInputChangeFV(e, "inputAmountFV")}
                />
                <label>Annual Rate (%):</label>
                <input
                  type="number"
                  step="0.01"
                  value={annualRate}
                  onChange={(e) => this.handleInputChangeFV(e, "annualRate")}
                />
                <label>Number of Years:</label>
                <input
                  type="number"
                  step="0.01"
                  value={numberOfYears}
                  onChange={(e) => this.handleInputChangeFV(e, "numberOfYears")}
                />
                <button onClick={this.calculateFutureValue}>
                  Calculate Future Value
                </button>
                {futureValue !== null && <p>Future Value: ${futureValue}</p>}
              </div>
            </div>

            <div className="calculator-item">
              <h3>Number of Periods Calculator</h3>
              <div className="form-container">
                <label>Outstanding Balance:</label>
                <input
                  type="number"
                  step="0.01"
                  value={outstandingBalance}
                  onChange={(e) =>
                    this.handleInputChangeNPER(e, "outstandingBalance")
                  }
                />
                <label>APR (%):</label>
                <input
                  type="number"
                  step="0.01"
                  value={apr}
                  onChange={(e) => this.handleInputChangeNPER(e, "apr")}
                />
                <label>Monthly Payment:</label>
                <input
                  type="number"
                  step="0.01"
                  value={monthlyPayment}
                  onChange={(e) =>
                    this.handleInputChangeNPER(e, "monthlyPayment")
                  }
                />
                <button onClick={this.calculateNumberOfPeriods}>
                  Calculate NPER
                </button>
                {numberOfPeriods !== null && (
                  <p>
                    Number of Periods:{" "}
                    {isNaN(numberOfPeriods)
                      ? "Invalid input"
                      : `${numberOfPeriods} months`}
                  </p>
                )}
              </div>
            </div>

            <div className="calculator-item">
              <h3>PMT Calculator</h3>
              <div className="form-container">
                <label>Your $ Goal:</label>
                <input
                  type="number"
                  step="0.01"
                  value={pmtGoal || ""}
                  onChange={(e) => this.setState({ pmtGoal: e.target.value })}
                />
                <label>Total Number of Investments:</label>
                <input
                  type="number"
                  step="1"
                  value={pmtPeriods || ""}
                  onChange={(e) =>
                    this.setState({ pmtPeriods: e.target.value })
                  }
                />
                <label>Rate of Return Per Period (%):</label>
                <input
                  type="number"
                  step="0.01"
                  value={pmtRate || ""}
                  onChange={(e) => this.setState({ pmtRate: e.target.value })}
                />
                <button onClick={this.calculatePMT}>Calculate PMT</button>
                {calculatedPMT && calculatedPMT !== "Invalid input" && (
                  <p>Payment Per Period: ${calculatedPMT}</p>
                )}
                {calculatedPMT === "Invalid input" && (
                  <p className="error-text">
                    Invalid input. Please check your values.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="bottom-button-container">
            <Link to="/videos" className="bottom-button">
              Go to Videos
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Templates;
