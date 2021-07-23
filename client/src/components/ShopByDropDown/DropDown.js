import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";

// Shop products, brands
import "./DropDown.css";

const dropdownOptions = [
  {
    label: "Products",
    value: "Products",
  },
  { label: "Brands", value: "Brands" },
];

const { log } = console;
const DropDownComponent = () => {
  const [dropDownVal, setDropDownVal] = useState(dropdownOptions[0].value);

  const handleDropDownChange = (e) => {
    log(e);

    const { value } = e;

    setDropDownVal(value);
  };

  const isMounted = useRef(true);
  useEffect(() => {
    log(dropDownVal);
    return () => {
      isMounted.current = false;
    };
  }, [dropDownVal]);

  return (
    <div className="dropdown__container">
      <Select
        options={dropdownOptions}
        defaultValue={dropdownOptions[0]}
        onChange={handleDropDownChange}
      />
    </div>
  );
};

export default DropDownComponent;
