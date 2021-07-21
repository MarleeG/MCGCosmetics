import React from "react";
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

const DropDownComponent = () => {

  return (
    <div className="dropdown__container">
      <Select options={dropdownOptions} defaultValue={dropdownOptions[0]}/>
    </div>
  );
};

export default DropDownComponent;