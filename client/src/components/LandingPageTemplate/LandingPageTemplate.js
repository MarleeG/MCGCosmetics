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
    <Container
      style={{ padding: "0px", display: 'relative' }}
      className="landing-page-template__container"
      fluid
    >
      <Row>
        <Col>
          <Header style={HeaderStyles} />
        </Col>
      </Row>

      <hr className="vertical-lines"/>
      <Row className="landing-page__content">
        <Col
          lg={12}
          className="landing-page__header-col"
          style={{
            borderRadius: "5px",
            backgroundImage: `linear-gradient(to right, ${UTIL.ranColor()} , ${UTIL.ranColor()})`,
          }}
        >
          <h2 className="google-font-philosopher landing-page__header">
            {header}
          </h2>
        </Col>

        <Col lg={12} className="landing-page__children-col">
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPageTemplate;
