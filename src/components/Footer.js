import { Container, Row, Col } from "react-bootstrap";
import Hermela from "../assets/img/hermela.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import Github from "../assets/img/github.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={Hermela} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/hermela-sirak/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/hermelasirak">
                <img src={Github} alt="" />
              </a>
              <a href="https://www.instagram.com/mela1_7/">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
