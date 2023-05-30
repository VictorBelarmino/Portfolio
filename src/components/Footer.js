import { Container, Row, Col } from "react-bootstrap";
import {MailchimpForm} from "./MailchimpForm.js";
import logo from "../assets/img/logo.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
import emailLogo from '../assets/img/email-logo.png';


export const Footer = () =>{
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                        
                        <br></br>
                        <Row>
                        <p>victorbelarminocontato@gmail.com</p>
                        </Row>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href='https://www.linkedin.com/in/victor-oliveira-belarmino-92138a197/'  target="_blank"><img src={navIcon1} alt=""/> </a>
                            <a href='https://victorbelarmino.itch.io' target="_blank" ><img src={navIcon2} alt=""/> </a>
                            {/*<a href='#'><img src={navIcon3} alt="Icon"/> </a>*/}
                        </div>
                        <br></br>
                        <p>CopyRight 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}