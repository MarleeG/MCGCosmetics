import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import LandingPageTemplate from "../../components/LandingPageTemplate/LandingPageTemplate";

const BrandLanding = () => {
  const { brandName } = useParams();
  return (
    <LandingPageTemplate header={brandName.toUpperCase()}>
      <Row style={{ margin: "15px" }}>
        <Col>
          <div>Content</div>
        </Col>
      </Row>
    </LandingPageTemplate>
  );
};

export default BrandLanding;
