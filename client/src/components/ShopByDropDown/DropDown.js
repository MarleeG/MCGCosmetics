import React, { useEffect, useRef } from "react";
import Select from "react-select";

// Shop products, brands
import "./DropDown.css";

const { log } = console;

const DropDownComponent = (props) => {
  // log(props.dropdownOptions)
  const isMounted = useRef(true);
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <div className="dropdown__container">
      <Select
        options={props.dropdownOptions}
        defaultValue={props.dropdownOptions[0]}
        onChange={props.handleDropDownChange}
      />

    </div>
  );
};

export default DropDownComponent;
