import React, { useState } from "react";
import "./FooterIndex.scss";

const FooterIndex = ({ links, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="footer-index">
      <h4
        onClick={() => {
          setOpen(!open);
        }}
        className="footer-index__title"
      >
        {title}
      </h4>

      <div className={open ? "footer-index__links" : "hiden "}>
        {links.map((item) => (
          <a
            rel="noreferrer"
            target="_blank"
            key={item.title}
            href={item.link}
            className="footer-index__link"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterIndex;
