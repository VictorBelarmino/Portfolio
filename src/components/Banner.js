import { useState, useEffect} from "react";
import { Col, Container,Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"

import headerImg from "../assets/img/a.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Game Developer", "Game Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() =>
    {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === 'G') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }


    return(
        <section className = "banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs ={12} md={6} xl = {7}>
                        <TrackVisibility>
                        {({ isVisible }) => 
                          <div className={isVisible ? "animate__animated animate_fadeIn" : ""}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`Hello I'm Victor `}<br/><span className="wrap">{text}</span></h1>
                            <p>I love games and how they are made, I graduated in Digital Games and worked for a while on porting games to consoles, and now I am focused on developing my own projects, actively working on their game design, scripting and programming.</p>
                            <button>{() => console.log('connect')}Lets Start<ArrowRightCircle size={25}></ArrowRightCircle></button>
                          </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs ={12} md={6} xl = {5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}