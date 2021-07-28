import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

import "./ButtonGroup.css";
const ButtonGroupComponent = (props) => {
  const { buttonValues, showSpecificCards, showAllCards } = props;
  return (
    <ButtonGroup aria-label="Button Group">
      {buttonValues.map((val, idx) => {
        return (
          <Button
            variant="light"
            key={idx}
            onMouseEnter={() => showSpecificCards(val)}
            onMouseLeave={() => showAllCards()}
          >
            {val}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default ButtonGroupComponent;
