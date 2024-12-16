import React from "react";
import "../Styles/Videos.css"; // Create a dedicated CSS file for Videos
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Videos() {
  return (
    <div className="videos-page">
      <Header />
      <main className="videos-main">
        <section className="faq-header">
          <h2>Videos</h2>
        </section>

        <div className="video-grid">
          {/* First Video */}
          <div className="video-item">
            <h3>What Is a Budget?</h3>
            <iframe
              src="https://www.youtube.com/embed/KYACPi_o768?si=76MS33ZkmgQxEsdf"
              title="What Is a Budget?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <ul>
              <li>
                A budget is a plan for your money, related to both the income
                and expenses.
              </li>
              <li>
                The 50/30/20 Rule: 50% for NEEDS, 30% for WANTS, and 20% for
                SAVINGS.
              </li>
              <li>
                The 60% solution: 60% for NEEDS and WANTS, and 40% for SAVINGS.
              </li>
              <li>
                The zero-based budget is the best way to go—basically, all the
                money going out should equal the money coming in, giving every
                single dollar a purpose.
              </li>
            </ul>
          </div>

          {/* Second Video */}
          <div className="video-item">
            <h3>The Importance of Budgeting</h3>
            <iframe
              src="https://www.youtube.com/embed/j1Vwth0B8I8?si=jdUEIEFWtO3cQjZP"
              title="The Importance of Budgeting"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <ul>
              <li>
                You can easily spend less than what you earn, with a budget.
              </li>
              <li>People lose track when managing their money.</li>
              <li>A budget helps you spend smarter.</li>
              <li>
                You can identify opportunities to keep more money in your
                pocket.
              </li>
              <li>
                A budget can teach tricks of clever spending, saving first, and
                paying bills second.
              </li>
              <li>It makes you accountable for your spendings.</li>
              <li>
                It helps you avoid the stress of living beyond your means.
              </li>
            </ul>
          </div>

          {/* Third Video */}
          <div className="video-item">
            <h3>How to Save Money on Everyday Expenses</h3>
            <iframe
              src="https://www.youtube.com/embed/GH_JLA-fkBY?si=2cigZsEgTtiv7pF0"
              title="How to Save Money on Everyday Expenses"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <ul>
              <li>Simple decisions made every day can help you save money.</li>
              <li>
                Making lists, getting coupons, finding offers, and lower prices
                can be the best options when grocery shopping.
              </li>
              <li>
                Sales and discounts can be great opportunities to save on things
                you need.
              </li>
              <li>Spend on what's important, save on what's not.</li>
              <li>Plan meals ahead of time.</li>
              <li>
                At home, limit the amount of electricity being used.
                <ul>
                  <li>
                    Utility companies charge more during certain hours of the
                    day.
                  </li>
                  <li>
                    Peak hours can be found on the utility company's website. If
                    you know the peak hours, you can work around the hours that
                    are better for doing the laundry or running the dishwasher.
                  </li>
                </ul>
              </li>
              <li>
                Transportation:
                <ul>
                  <li>
                    Websites and apps can help you locate the best offers for
                    gas.
                  </li>
                  <li>
                    Public transportation can be an option, as well as renting
                    cars or bicycling.
                  </li>
                </ul>
              </li>
              <li>
                Occasionally plan activities that can help you limit
                temptations.
              </li>
              <li>Trade-offs can add up over the long run.</li>
            </ul>
          </div>

          {/* Fourth Video */}
          <div className="video-item">
            <h3>Easiest Way To Budget</h3>
            <iframe
              src="https://www.youtube.com/embed/3pslPbfpnzk?si=21jz3BznwrKYfSe8"
              title="Investing for Beginners"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <ul>
              <li>Grab a notebook or even a sheet of paper to keep track.</li>
              <li>Calculate monthly income.</li>
              <li>
                Budget with the minimum amount of money that will be brought in
                monthly.
              </li>
              <li>Calculate bills and expenses.</li>
              <li>
                It's important to give priority to the bills that are typically
                the most important.
              </li>
              <li>Calculate the total of expenses.</li>
              <li>
                Subtract expenses from income, and figure out what will be done
                with the remaining funds.
              </li>
              <li>
                Remaining funds should all have a purpose—this can guarantee
                that each dollar is spent wisely.
              </li>
            </ul>
          </div>
        </div>

        <div className="bottom-button-container">
          <Link to="/faq" className="bottom-button">
            Go to Forms
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Videos;
