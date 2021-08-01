import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
const Header = (props) => {
  const {
    style: { header, slogan },
  } = props;


  return (
    <div className="header__container">
      <div className="header__text-content vertically-center">
        {/* google-font-limelight */}
        {/* google-font-modak */}
        <Link to="/">
          <h1 className="google-font-lobster" style={header && header}>
            MCG COSMETICS
          </h1>
        </Link>
        <p className="google-font-homemade-apple" style={slogan && slogan}>
          Reveal your inner artist
        </p>
      </div>
    </div>
  );
};

export default Header;
