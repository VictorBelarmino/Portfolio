import { Container, Col, Row, Card } from 'react-bootstrap';

//Processes images
import processImg1 from "../assets/img/processes/precessImg1.png";
import processImg2 from "../assets/img/processes/precessImg2.png";
import processImg3 from "../assets/img/processes/precessImg3.png";
import processImg4 from "../assets/img/processes/precessImg4.png";
import processImg5 from "../assets/img/processes/precessImg5.png";
import processImg6 from "../assets/img/processes/precessImg6.png";
import processImg7 from "../assets/img/processes/precessImg7.png";
import processImg8 from "../assets/img/processes/precessImg8.png";
import processImg9 from "../assets/img/processes/precessImg9.png";
import processImg10 from "../assets/img/processes/precessImg10.png";
import processImg11 from "../assets/img/processes/precessImg11.png";
import processImg12 from "../assets/img/processes/precessImg12.png";

export const Processes = () =>{
    return (
        <section className='process' id="processes">
        <Container>
            <Row>
                <h2>Processes</h2>
                <p>Learn a bit about some of my processes during the development of some games.</p>
            </Row>
            
            <Row xs={1} md={2} className="g-4">
                <Col>
                <Card border="success" bg = 'dark' >
                        <Card.Img variant="top" src={processImg4} />
                        <Card.Body>
                            <Card.Title>Game Design Document</Card.Title>
                            <Card.Text>
                            Serving as a guide for everyone involved in the project, the GDD 
                            carries a very high importance for development, so its writing must 
                            be easy for the reader to understand. (A gdd written in a way that 
                            is not pleasing to the team is a useless gdd, because no one will want to read it).
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card border="primary" bg = 'dark' >
                        <Card.Img variant="top" src={processImg8} />
                        <Card.Body>
                            <Card.Title>UX/UI Design</Card.Title>
                            <Card.Text>
                                Responsible for the first sketch of the UI focusing on elements 
                                that are important for the player and a nice layout for easy 
                                understanding, to then pass to the artist to make the final art.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card border="danger" bg = 'dark' >
                        <Card.Img variant="top" src={processImg1} />
                        <Card.Body>
                            <Card.Title>Illustrated systems</Card.Title>
                            <Card.Text>
                                Preparing explanatory drawings that will serve the programmer 
                                to better understand how the mechanics will work together with 
                                the written part of the GDD.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br></br>
                    
                    <br></br>
                    <Card border="warning" bg = 'dark' >
                        <Card.Img variant="top" src={processImg7} />
                        <Card.Body>
                            <Card.Title>Overview of my board in the Figma</Card.Title>
                            <Card.Text>
                                The miro platform is a great tool to draw or even gather all 
                                ideas on one board, I use it for many things, like drawing, 
                                annotating mechanics before transferring to gdd, gathering 
                                images in an easy way to organize and annotate ideas.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card border="primary" bg = 'dark' >
                        <Card.Img variant="top" src={processImg12} />
                        <Card.Body>
                            <Card.Title>Using spreadsheets for organization</Card.Title>
                            <Card.Text>
                            I generally use spreadsheets to facilitate the organization of 
                            games that involve a large amount of information, such as RPGs. 
                            Furthermore, I use them to perform balancing outside of the engine. 
                            Another application is the creation of text lists for the entire game, 
                            especially when there is a need for translation into different languages.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card border="info" bg = 'dark' >
                        <Card.Img variant="top" src={processImg10} />
                        <Card.Body>
                            <Card.Title>Study</Card.Title>
                            <Card.Text>
                                I like to read about game design and human behavior 
                                so I can create unique new experiences in my games, 
                                and I also like to play games to learn how certain 
                                systems are made.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                <br></br>
                <Card border="danger" bg = 'dark' >
                        <Card.Img variant="top" src={processImg3} />
                        <Card.Body>
                            <Card.Title>Adjustments and banlancements within the engine</Card.Title>
                            <Card.Text>
                                Inside the game engine it is always good to check if 
                                the systems are working properly, and also where I 
                                perform the balancing, for example, setting values, 
                                changing asset positions in the scene or even UI/UX adjustments.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br></br>
                <Card border="info" bg = 'dark' >
                        <Card.Img variant="top" src={processImg11} />
                        <Card.Body>
                            <Card.Title>Figma for UX/UI and Level Design</Card.Title>
                            <Card.Text>
                            I recently started using figma to help me with my process, 
                            the tool proved to be very practical, 
                            especially for creating UX/UI and also level design with some plugins.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br></br>
                   
                    <br></br>
                    <Card border="success" bg = 'dark' >
                        <Card.Img variant="top" src={processImg9} />
                        <Card.Body>
                            <Card.Title>Level Design</Card.Title>
                            <Card.Text>
                            Creating maps that, besides being beautiful no matter where you look, 
                            are still functional, always thinking about the player's experience and 
                            directing him to points of interest, making them stand out, through the 
                            position of the environments and the lighting.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card border="info" bg = 'dark' >
                        <Card.Img variant="top" src={processImg2} />
                        <Card.Body>
                            <Card.Title>Flowchart and general game operation</Card.Title>
                            <Card.Text>
                                Flowchart with all the scenes of the game, important 
                                for the Gameloop (where the player will be every 
                                time he is playing).
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card border="warning" bg = 'dark' >
                        <Card.Img variant="top" src={processImg5} />
                        <Card.Body>
                            <Card.Title>Analysis of commits made by the team</Card.Title>
                            <Card.Text>
                                Whenever someone from the team makes a new commit, 
                                I check the changes and test them to see if they 
                                are in order.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Card border="primary" bg = 'dark' >
                        <Card.Img variant="top" src={processImg6} />
                        <Card.Body>
                            <Card.Title>Planning new gameplay elements</Card.Title>
                            <Card.Text>
                                I start with a very practical drawing about this new mechanic, 
                                then I start thinking about the possible problems that can be 
                                triggered, and finally I start writing in gdd how this new 
                                element works.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
      </Container>
      </section>
    )
}