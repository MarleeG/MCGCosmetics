import React from "react";

import "./ProductCard.css";
const ProductCard = (props) => {
  const { name, src } = props;
  return (
    <div className="product-card__container vertically-center google-font-philosopher">
      {props.children}
    </div>
  );
};

export default ProductCard;
