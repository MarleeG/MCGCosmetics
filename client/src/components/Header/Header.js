import React from "react";

import "./Header.css";
const Header = () => {
  return (
    <div className="header__container">
      <div className="header__text-content vertically-center">
      {/* google-font-limelight */}
      {/* google-font-modak */}
        <h1 className="google-font-lobster">
          MCG COSMETICS
        </h1>
        <p className="google-font-homemade-apple">Show your inner artist</p>
      </div>
    </div>
  );
};

export default Header;
