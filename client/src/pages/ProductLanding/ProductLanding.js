import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import LandingPageTemplate from "../../components/LandingPageTemplate/LandingPageTemplate";
// import UTIL from '../../util/data';

import "./ProductLanding.css";
const ProductLanding = (props) => {
  const { productName } = useParams();

  return (
    // updateHeader(productName.toUpperCase()
    <LandingPageTemplate header={productName.toUpperCase()}>
      <Row style={{ margin: "15px" }}>
        <Col>
          <div>Content</div>
        </Col>
      </Row>
    </LandingPageTemplate>
  );
};

export default ProductLanding;
