import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";

// Shop products, brands
import "./DropDown.css";

const { log } = console;


const DropDownComponent = (props) => {

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
        // theme={theme => ({
        //   ...theme,
        //   borderRadius: 0,
        //   colors: {
        //     ...theme.colors,
        //     primary25: 'hotpink',
        //     primary: 'black',
        //   },
        // })}
      />
    </div>
  );
};

export default DropDownComponent;
