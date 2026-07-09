import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import LoginBanner from "../../components/auth/LoginBanner";
import RegisterForm from "../../components/auth/RegisterForm";

import "../../assets/styles/login.css";

const Register = () => {
  return (
    <Container fluid className="login-page">
      <Row className="vh-100">

        <Col lg={6} className="banner-section p-0">
          <LoginBanner />
        </Col>

        <Col
          lg={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Card className="login-card shadow-lg">
            <Card.Body>
              <RegisterForm />
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
};

export default Register;