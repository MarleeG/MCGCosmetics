import React, { Fragment, useRef, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import HomePageCard from "../../components/HomePageCard/Card";
import Dropdown from "../../components/ShopByDropDown/DropDown";
import ButtonGroupComponent from "../../components/ButtonGroup/ButtonGroup";
import { getAPIInfo, getBrands } from "../../API/data";
import {
  getHomePageDropDownValues,
  getFirstCharacters,
} from "../../general/data";

import "./Home.css";

const { log } = console;

const PRODUCT_DROP_DOWN_VAL = getHomePageDropDownValues()[0].value;
const BRAND_DROP_DOWN_VAL = getHomePageDropDownValues()[1].value;

const Home = () => {
  const [apiInfo, setAPIInfo] = useState([]);
  const [brands, setBrands] = useState([]);
  const [dropDownVal, setDropDownVal] = useState("");

  const handleDropDownChange = (e) => {
    const { value } = e;

    setDropDownVal(value);
  };

  const showSpecificCards = (val) => {
    // if (dropDownVal === PRODUCT_DROP_DOWN_VAL) {
    //   // PRODUCTS
    //   const filteredInfo = apiInfo.filter((obj) => obj.name[0] === val)
    //   setAPIInfo(filteredInfo);
    // } else {
    //   // BRANDS
    // }
  };

  const showAllCards = () => {
    // setAPIInfo([]);
    // setBrands([]);
    // setDefaultValues();
  }

  const setDefaultValues = () => {
    if (apiInfo.length === 0) {
      getAPIInfo()
        .then((res) => {
          // getFirstCharacters(res.data)
          setAPIInfo(res.data);
        })
        .catch((err) => console.log(err));
    }

    if (brands.length === 0) {
      getBrands()
        .then((res) => {
          log(res.data);
          setBrands(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  const isMounted = useRef(true);
  useEffect(() => {
    setDefaultValues();

    if (dropDownVal === "") {
      // set initial drop down value to Products
      setDropDownVal(getHomePageDropDownValues()[0].value);
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
        handleDropDownChange={handleDropDownChange}
        dropdownOptions={getHomePageDropDownValues()}
      />

      <ButtonGroupComponent
        showSpecificCards={showSpecificCards}
        showAllCards={showAllCards}
        buttonValues={
          dropDownVal === PRODUCT_DROP_DOWN_VAL
            ? getFirstCharacters(apiInfo)
            : getFirstCharacters(brands)
        }
      />

      <div className="products-list">
        {apiInfo.length > 0 &&
          dropDownVal === PRODUCT_DROP_DOWN_VAL &&
          dropDownVal !== "" &&
          apiInfo.map((info) => {
            const { name, id, img_src } = info;

            const CARD = (
              <HomePageCard key={id}>
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
            const { id, name } = brand;

            const CARD = <HomePageCard key={id}>{name}</HomePageCard>;

            return CARD;
          })}
      </div>
    </Fragment>
  );
};

export default Home;
