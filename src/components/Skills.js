import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import meter4 from "../assets/img/meter4.png";
import logo1 from "../assets/img/logo1.png";
import logo2 from "../assets/img/logo2.png";
import logo3 from "../assets/img/logo3.png";
import logo4 from "../assets/img/logo4.png";
import logo5 from "../assets/img/logo5.png";

import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {   
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    const responsiveLogo = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Skills throughout my career as a developer that I have learned by working, studying and developing games.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">   
                                    <img src={meter3} alt="Image"/>
                                    <h5>Game Designer</h5>
                                    <h6>Two years' experience</h6>
                                </div>
                                <div className="item">   
                                    <img src={meter2} alt="Image"/>
                                    <h5>Programmer</h5>
                                    <h6>Two years' experience</h6>
                                </div>
                                <div className="item">   
                                    <img src={meter1} alt="Image"/>
                                    <h5>Screenwriter</h5>
                                    <h6>One year experience</h6>
                                </div>
                                <div className="item">   
                                    <img src={meter4} alt="Image"/>
                                    <h5>Agile methodologies</h5>
                                    <h6>One year experience</h6>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                           <Carousel responsive={responsiveLogo} infinite={true} className="skill-slider">
                                <div className="logo">   
                                    <img src={logo1} alt="Image"/>
                                    <h5>C Sharp</h5>
                                    <h6>Two years' experience</h6>
                                </div>
                                <div className="logo">   
                                    <img src={logo3} alt="Image" size/>
                                    <h5>Unity Engine</h5>
                                    <h6>Two years' experience</h6>
                                </div>
                                <div className="logo">   
                                    <img src={logo5} alt="Image" size/>
                                    <h5>GitHub</h5>
                                    <h6>Two years' experience</h6>
                                </div>
                                <div className="logo">   
                                    <img src={logo2} alt="Image"/>
                                    <h5>Game Maker 2</h5>
                                    <h6>One year experience</h6>
                                </div>
                                <div className="logo">   
                                    <img src={logo4} alt="Image" size/>
                                    <h5>Construct</h5>
                                    <h6>One year experience</h6>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    )
}
