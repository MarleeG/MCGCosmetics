import React from "react";

import "./ProductCard.css";
const ProductCard = (props) => {
  const { name } = props;
  return <div className="product-card__container vertically-center google-font-homemade-apple"> {name}</div>;
};

export default ProductCard;
