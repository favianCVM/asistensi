import React from "react";
import "./Footer.scss";
import FooterIndex from "../FooterIndex/FooterIndex";
import FooterSearchBar from "../FooterSearchbar/FooterSearchbar";
import facebookLogo from "../../assets/images/facebook.svg";
import instagramLogo from "../../assets/images/instagram.svg";
import twitterLogo from "../../assets/images/twitter.svg";

const Footer = () => {
  const footerIndexContent = [
    {
      title: "Products",
      links: [
        {
          title: "lorem ipsum1",
          link: "https://www.google.com",
        },
        {
          title: "lorem ipsum2",
          link: "https://www.google.com",
        },
        {
          title: "lorem ipsum3",
          link: "https://www.google.com",
        },
      ],
    },

    {
      title: "Developers",
      links: [
        {
          title: "lorem ipsum7",
          link: "https://www.google.com",
        },
        {
          title: "lorem ipsum8",
          link: "https://www.google.com",
        },
        {
          title: "lorem ipsum9",
          link: "https://www.google.com",
        },
      ],
    },

    {
      title: "Company",
      links: [
        {
          title: "lorem ipsum123123",
          link: "https://www.google.com",
        },
        {
          title: "lorem ipsum3123",
          link: "https://www.google.com",
        },
        {
          title: "lorem ipsum133",
          link: "https://www.google.com",
        },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__round"></div>

      <div className="footer__index">
        <FooterSearchBar />
        {footerIndexContent.map((item) => (
          <FooterIndex key={item.title} title={item.title} links={item.links} />
        ))}
      </div>

      <div className="footer__section">
        <div className="section">
          <span className="section__name">Shop</span>
          <span className="section__name">Service</span>
          <span className="section__name">About</span>
          <span className="section__name">Support</span>
        </div>
        <div className="socials">
          <a rel="noreferrer" target="_blank" href="https://www.google.com/">
            <img
              alt="social-logo"
              src={facebookLogo}
              className="socials__icon"
            />
          </a>
          <a rel="noreferrer" target="_blank" href="https://www.google.com/">
            <img
              alt="social-logo"
              src={instagramLogo}
              className="socials__icon"
            />
          </a>
          <a rel="noreferrer" target="_blank" href="https://www.google.com/">
            <img
              alt="social-logo"
              src={twitterLogo}
              className="socials__icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
