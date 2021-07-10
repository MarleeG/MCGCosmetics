import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getAllProductTypes } from "../../API/data";

import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <Header />

      <div className="products-list">
        {getAllProductTypes().map((name, idx) => {
          return <ProductCard name={name} key={idx} />;
        })}

        {/* {PRODUCTS.forEach((productName, idx) => <p>{productName}</p>)} */}
        {/* {PRODUCTS.map((productName, idx) => <p>{productName}</p>)} */}
      </div>
    </Fragment>
  );
};

export default Home;
