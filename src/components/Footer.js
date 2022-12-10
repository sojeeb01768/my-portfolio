import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/odina2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center my-10">
          
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}

          </Col>
          <Col size={12} sm={6} className="text-center text-sm-start">
            <div className="social-icon my-auto">
              <a target="_blank"  href="https://www.linkedin.com/in/md-al-kafee-6b5981175/"><img src={navIcon1} alt="Icon" /></a>
              <a target="_blank"  href="https://www.facebook.com/sojeeb.mridha.9/"><img src={navIcon2} alt="Icon" /></a>
              <a target="_blank"  href="https://github.com/sojeeb01768"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_Rfzl_8KF0wh5hmVeowNsaRYJikwC5-KqnryD24w17NerP-XST7A5v1hZv_zFdU0dU0&usqp=CAU" alt="Icon" className="text-white" /></a>
            </div>
            <p>All Right Reserve to Md. Al-Kafee</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
