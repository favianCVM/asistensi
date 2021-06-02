import React from "react";
import "./Navbar.scss";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Jumbotron from "../Jumbotron/Jumbotron";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="navbar">
      <div className="navbar__elements">
        <Link className="" to="/">
          <img className="navbar__logo" src={logo} alt={logo} />
        </Link>

        <div className="navbar__links">
          <Link className="navbar__link" to="/users">
            Users
          </Link>
          <Link className="navbar__link" to="/">
            Developers
          </Link>
          <Link className="navbar__link" to="/">
            Company
          </Link>
        </div>
      </div>
      {pathname === "/" ? <Jumbotron /> : null}

      <div className="round"></div>
    </nav>
  );
};

export default Navbar;
