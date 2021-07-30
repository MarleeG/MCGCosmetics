import React from "react";

import "./Card.css";
const ProductCard = (props) => {
  // const { name, src } = props;
  return (
    
    <div className="product-card__container vertically-center google-font-philosopher animate__animated animate__fadeIn">
      {props.children}
    </div>
  );
};

export default ProductCard;
