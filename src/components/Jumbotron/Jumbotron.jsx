import React from "react";
import "./Jumbotron.scss";
import creditCard from "../../assets/images/credit-card.svg";
const Jumbotron = () => {
  return (
    <div className="jumbo">
      <h2 className="jumbo__title"> Be smart take card</h2>
      <p className="jumbo__text ">
        You should take a break of being poor, now lets take a card!
      </p>
      <button className="jumbo__apply-button">Apply for card</button>
      <img className="jumbo__image" src={creditCard} alt={creditCard} />
    </div>
  );
};

export default Jumbotron;
