import React, { Fragment, useRef, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import HomePageCard from "../../components/HomePageCard/Card";
import Dropdown from "../../components/ShopByDropDown/DropDown";
import ButtonGroupComponent from "../../components/ButtonGroup/ButtonGroup";
import { getAPIInfo, getBrands } from "../../API/data";
// import {
//   getHomePageDropDownValues,
//   getFirstCharacters
// } from "../../general/data";

// import {getHomePageDropDownValues, getFirstCharacters} from '../../util/data'
import UTIL from '../../util/data'


import "./Home.css";

const { log } = console;

const PRODUCT_DROP_DOWN_VAL = UTIL.getHomePageDropDownValues()[0].value;
const BRAND_DROP_DOWN_VAL = UTIL.getHomePageDropDownValues()[1].value;

const Home = () => {
  const [apiInfo, setAPIInfo] = useState([]);
  const [originalAPIInfo, setOriginalAPIInfo] = useState([]);
  const [brands, setBrands] = useState([]);
  const [orignalBrands, setOrignalBrands] = useState([]);
  const [dropDownVal, setDropDownVal] = useState("");

  const handleDropDownChange = (e) => {
    const { value } = e;
    setDropDownVal(value);
  };

  const showSpecificCards = (val) => {
    // log(`Filtering: ${val}`);
    const VAL_ALL = "ALL";
    if (dropDownVal === PRODUCT_DROP_DOWN_VAL) {
      // PRODUCTS

      if (VAL_ALL === val) {
        setAPIInfo(originalAPIInfo);
      } else {
        const filteredInfo = originalAPIInfo.filter(
          (obj) => obj.name[0] === val
        );
        setAPIInfo(filteredInfo);
      }
    } else {
      // BRANDS
      if (VAL_ALL === val) {
        setBrands(orignalBrands);
      } else {
        const filteredInfo = orignalBrands.filter((obj) => obj.name[0] === val);
        setBrands(filteredInfo);
      }
    }
  };

  const isMounted = useRef(true);
  useEffect(() => {
    if (apiInfo.length === 0) {
      getAPIInfo()
        .then((res) => {
          setAPIInfo(res.data);
          setOriginalAPIInfo(res.data);
        })
        .catch((err) => console.log(err));
    }

    if (brands.length === 0) {
      getBrands()
        .then((res) => {
          // log(res.data);
          setBrands(res.data);
          setOrignalBrands(res.data);
        })
        .catch((err) => console.log(err));
    }

    if (dropDownVal === "") {
      // set initial drop down value to Products
      setDropDownVal(UTIL.getHomePageDropDownValues()[0].value);
    }

    // log(`dropDownVal: ${dropDownVal}`);

    return () => {
      isMounted.current = false;
    };
  }, [dropDownVal, brands, apiInfo]);

  return (
    <Fragment>
      <Header />

      <Dropdown
        dropdownOptions={UTIL.getHomePageDropDownValues()}
        handleDropDownChange={handleDropDownChange}
      />

      <ButtonGroupComponent
        showSpecificCards={showSpecificCards}
        buttonValues={
          dropDownVal === PRODUCT_DROP_DOWN_VAL
            ? UTIL.getFirstCharacters(originalAPIInfo)
            : UTIL.getFirstCharacters(orignalBrands)
        }
      />

      <div className="products-list">
        {apiInfo.length > 0 &&
          dropDownVal === PRODUCT_DROP_DOWN_VAL &&
          dropDownVal !== "" &&
          apiInfo.map((info) => {
            const { name, id, img_src, api_product_type_value } = info;

            const CARD = (
              <HomePageCard
                key={id}
                rootPath="/product"
                // name={name}
                path={`/product/${api_product_type_value}`}
              >
                <img src={img_src} alt={name} className="product-card__icon" />{" "}
                {name}
              </HomePageCard>
            );

            return CARD;
          })}

        {brands.length > 0 &&
          dropDownVal === BRAND_DROP_DOWN_VAL &&
          dropDownVal !== "" &&
          brands.map((brand) => {
            const { id, name, api_brand_value } = brand;

            const CARD = (
              <HomePageCard
                key={id}
                rootPath="/brand"
                path={`/brand/${api_brand_value}`}
                // name={name}
              >
                {name}
              </HomePageCard>
            );

            return CARD;
          })}
      </div>
    </Fragment>
  );
};

export default Home;