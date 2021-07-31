import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";
const { log } = console;
const ProductCard = (props) => {
  const { name, rootPath, path } = props;

  // log(`path: ${path}`);
  // log(`rootPath: ${rootPath}`);
  // log(`name: ${name}`);
  // log("---------------");

  return (
    <Link to={`${path}`}>
      <div className="product-card__container vertically-center google-font-philosopher animate__animated animate__fadeIn">
        {props.children}
      </div>
    </Link>
  );
};

export default ProductCard;
