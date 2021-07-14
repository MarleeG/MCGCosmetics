import React from "react";

import "./ProductCard.css";
const ProductCard = (props) => {
  const { name, src } = props;
  return (
    <div className="product-card__container vertically-center google-font-homemade-apple">
      <img src={src} alt={name} className="product-card__icon" /> {name}
    </div>
  );
};

export default ProductCard;
