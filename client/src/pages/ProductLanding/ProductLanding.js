import React from "react";
import { useParams } from "react-router-dom";

const ProductLanding = (props) => {
  const { productName } = useParams();
  return (
    <div>
      <h1>{productName.toUpperCase()}</h1>
    </div>
  );
};

export default ProductLanding;
