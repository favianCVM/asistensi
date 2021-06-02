import React from "react";
import "./CardSelection.scss";
import CardStep from "../CardStep/CardStep";
import {
  faClipboard,
  faClipboardList,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
const CardSelection = () => {
  const cardInfo = [
    {
      title: "Application online",
      icon: faClipboard,
      message:
        "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. ",
    },
    {
      title: "Get an approval",
      icon: faClipboardList,
      message:
        "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.",
    },
    {
      title: "Card delivery",
      icon: faCreditCard,
      message:
        "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.",
    },
  ];

  return (
    <div className="card-selection">
      <h3 className="card-selection__title">Get your card</h3>

      <p className="card-selection__message">
        So as you can see the example image has low resolutions so i'm writing
        spaghetti here
      </p>

      <div className="card-selection__steps">
        {cardInfo.map((item) => (
          <CardStep
            key={item.title}
            title={item.title}
            icon={item.icon}
            message={item.message}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSelection;
