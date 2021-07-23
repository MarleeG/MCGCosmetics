import React, { Fragment, useRef, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import Dropdown from "../../components/ShopByDropDown/DropDown";
import { getAPIInfo, getBrands } from "../../API/data";
import { getHomePageDropDownValues } from "../../general/data";

import "./Home.css";

const { log } = console;

const PRODUCT_DROP_DOWN_VAL = getHomePageDropDownValues()[0].value;
const BRAND_DROP_DOWN_VAL = getHomePageDropDownValues()[1].value;

const Home = () => {
  const [apiInfo, setAPIInfo] = useState([]);
  const [brands, setBrands] = useState([]);
  const [dropDownVal, setDropDownVal] = useState("");

  const handleDropDownChange = (e) => {
    log(e);

    const { value } = e;

    setDropDownVal(value);
  };

  const isMounted = useRef(true);
  useEffect(() => {
    if (apiInfo.length === 0) {
      getAPIInfo()
        .then((res) => setAPIInfo(res.data))
        .catch((err) => console.log(err));
    }

    if (brands.length === 0) {
      getBrands()
        .then((res) => {
          log(res.data)
          setBrands(res.data)
        })
        .catch((err) => console.log(err));
    }

    if (dropDownVal === "") {
      // set initial drop down value to Products
      setDropDownVal(getHomePageDropDownValues()[0].value);
    }

    // log(`dropDownVal: ${dropDownVal}`);

    return () => {
      isMounted.current = false;
    };
  }, [dropDownVal]);
  return (
    <Fragment>
      <Header />

      <Dropdown
        handleDropDownChange={handleDropDownChange}
        dropdownOptions={getHomePageDropDownValues()}
      />

      <div className="products-list">
        {apiInfo.length > 0 &&
          dropDownVal === PRODUCT_DROP_DOWN_VAL &&
          dropDownVal !== "" &&
          apiInfo.map((info) => {
            const { name, id, img_src } = info;

            const CARD = (
              <ProductCard key={id}>
                <img src={img_src} alt={name} className="product-card__icon" />{" "}
                {name}
              </ProductCard>
            );

            return CARD;
          })}

        {brands.length > 0 &&
          dropDownVal === BRAND_DROP_DOWN_VAL &&
          dropDownVal !== "" &&
          brands.map((brand) => {
            const {id, name} = brand;

            const CARD = <ProductCard key={id}>
              {name}
            </ProductCard>

            return CARD
          })}
      </div>
    </Fragment>
  );
};

export default Home;
