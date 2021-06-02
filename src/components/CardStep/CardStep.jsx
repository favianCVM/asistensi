import React from "react";
import "./CardStep.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardStep = ({ title, message, icon }) => {
  return (
    <div className="card-step">
      <FontAwesomeIcon className="card-step__icon" icon={icon} />
      <h4 className="card-step__title">{title}</h4>
      <p className="card-step__message">{message}</p>
    </div>
  );
};

export default CardStep;
