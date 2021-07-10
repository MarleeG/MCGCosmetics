import React, { Fragment, useRef, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getAPIInfo } from "../../API/data";

import "./Home.css";

const Home = () => {
  const [apiInfo, setAPIInfo] = useState([]);

  const isMounted = useRef(true);
  useEffect(() => {
    getAPIInfo()
      .then((res) => setAPIInfo(res.data))
      .catch((err) => console.log(err));

    return () => {
      isMounted.current = false;
    };
  }, []);
  return (
    <Fragment>
      <Header />

      <div className="products-list">
        {apiInfo.length > 0 &&
          apiInfo.map((info) => {
            return <ProductCard name={info.name} key={info.id} />;
          })}
      </div>
    </Fragment>
  );
};

export default Home;
