import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header/Header";
import UTIL from "../../util/data";

import "./LandingPageTemplate.scss";
const HeaderStyles = {
  header: { fontSize: "50px" },
  slogan: { fontSize: "15px" },
};
const LandingPageTemplate = (props) => {
  const { header } = props;

  return (
    // border: "3px dotted orange",
    <Container style={{ padding: "0px" }} fluid>
      <Row>
        <Col>
          <Header style={HeaderStyles} />
        </Col>
      </Row>

      <hr className="vertical-lines"/>
      <Row
        className="landing-page__content"
        style={{
          margin: "0 15px",
          // backgroundColor: `${UTIL.ranColor()}`,
          borderRadius: "5px",
          backgroundImage: `linear-gradient(to right, ${UTIL.ranColor()} , ${UTIL.ranColor()})`,
        }}
      >
        <Col lg={true}>
          <h2 className="google-font-philosopher landing-page__header">
            {header}
          </h2>
        </Col>
      </Row>

      {props.children}
    </Container>
  );
};

export default LandingPageTemplate;
