import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

import "./ButtonGroup.css";
const { log } = console;
const ButtonGroupComponent = (props) => {
  const { buttonValues, showSpecificCards } = props;
  return (
    <ButtonGroup aria-label="Button Group" className="btn__container-group">
      {buttonValues.map((val, idx) => {
        return (
          <Button
            variant="light"
            key={idx}
            className="btn__char"
            onClick={() => showSpecificCards(val)}
          >
            {val}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default ButtonGroupComponent;
