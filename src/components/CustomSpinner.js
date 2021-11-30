import React from "react";
import { Spinner, Col, Row } from "react-bootstrap";

const CustomSpinner = () => {
  return (
    <div
      className="d-flex justify-content-center mt-5"
      style={{ height: "100vh" }}
    >
      <Row>
        <Col>
          <Spinner
            animation="border"
            className="test"
            role="status"
            style={{ height: "5vh", width: "5vh" }}
          ></Spinner>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="test mx-3 mt-2">Registrando Pokemon...</div>
        </Col>
      </Row>
    </div>
  );
};

export default CustomSpinner;
