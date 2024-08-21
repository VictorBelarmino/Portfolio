import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

//Personal Portifolio images
import personalProjImg1 from "../assets/img/personal-projects/project-img1.png";
import personalProjImg2 from "../assets/img/personal-projects/project-img2.png";
import personalProjImg3 from "../assets/img/personal-projects/project-img3.png";
import personalProjImg4 from "../assets/img/personal-projects/project-img4.png";
import personalProjImg5 from "../assets/img/personal-projects/project-img5.png";
import personalProjImg6 from "../assets/img/personal-projects/project-img6.png";

//Proficional Portifolio images
import proficionalProjImg1 from "../assets/img/proficional-projects/project-img1.png";
import proficionalProjImg2 from "../assets/img/proficional-projects/project-img2.png";
import proficionalProjImg3 from "../assets/img/proficional-projects/project-img3.png";
import proficionalProjImg4 from "../assets/img/proficional-projects/project-img4.png";
import proficionalProjImg5 from "../assets/img/proficional-projects/project-img5.png";
import proficionalProjImg6 from "../assets/img/proficional-projects/project-img6.png";

//Screenshots
import screenshotImg1 from "../assets/img/screenshots/project-img1.png";
import screenshotImg2 from "../assets/img/screenshots/project-img2.png";
import screenshotImg3 from "../assets/img/screenshots/project-img3.png";
import screenshotImg4 from "../assets/img/screenshots/project-img4.png";
import screenshotImg5 from "../assets/img/screenshots/project-img5.png";
import screenshotImg6 from "../assets/img/screenshots/project-img6.png";
import screenshotImg7 from "../assets/img/screenshots/project-img7.png";
import screenshotImg8 from "../assets/img/screenshots/project-img8.png";
import screenshotImg9 from "../assets/img/screenshots/project-img9.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const personalProjects = [
    {
      title: "Torrois (Game Jam)",
      description: "Game Design & Level Design, Working with the idea within the jam theme, creating puzzle levels and planning all the mechanics involved in the game.",
      imgUrl: personalProjImg1,
      link: "https://didiei3.itch.io/torrois", 
    },
    {
      title: "Sensatos (Developing)",
      description: "Game Design, Screenwriter & C# Programming, Acting as the main game design, responsible for the mechanics, balance, game flow, juice etc. Writing the main story of the game and the characters and missions that involve them. Planning and programming minigames to include within the game.",
      imgUrl: personalProjImg2,
      link: "https://didiei3.itch.io/sensatos-invasao-a-colmeia", 
    },
    {
      title: "Guardado a sete chaves (Academic)",
      description: "Game Design, C++ Programming, 2D Artist",
      imgUrl: personalProjImg3,
      link: "https://henrique-martins.itch.io/guardado-a-sete-chaves", 
    },
    {
      title: "Sandalation Adventure (Game Jam)",
      description: "Game Design & Level Design",
      imgUrl: personalProjImg4,
      link: "https://didiei3.itch.io/sandalations", 
    },
    {
      title: "Minidungeon",
      description: "Game Designer, game in progress.",
      imgUrl: personalProjImg5,
      link: "", 
    },
    {
      title: "Raposo",
      description: "My first game",
      imgUrl: personalProjImg6,
      link: "https://victorbelarmino.itch.io/raposo-20", 
    },
  ];

  const proficionalProjects = [
    {
      title: "Railway Islands Puzzle",
      description: "Porting to Xbox One, Playstation 4 and Nintendo Switch",
      imgUrl: proficionalProjImg1,
      link: "https://www.qubyteinteractive.com/games/Railway-Islands/", 
    },
    {
      title: "Doomed to Hell",
      description: "Porting to Xbox One, Playstation 4 and Nintendo Switch",
      imgUrl: proficionalProjImg2,
      link: "https://www.qubyteinteractive.com/games/doomed-to-hell/", 
    },
    {
      title: "Hidden Shapes Black Skull + Old West",
      description: "Porting to Xbox One, Playstation 4 and Nintendo Switch",
      imgUrl: proficionalProjImg3,
      link: "https://www.nintendo.com/pt-br/store/products/hidden-shapes-black-skull-plus-old-west-switch/", 
    },
    {
      title: "Jitsu Squad",
      description: "Porting to Playstation 5",
      imgUrl: proficionalProjImg4,
      link: "https://store.playstation.com/pt-br/product/UP8012-CUSA36310_00-JITSUSQUADPS4USX", 
    },
    {
      title: "Bricky to Me",
      description: "Porting to Xbox One, Playstation 4 and Nintendo Switch",
      imgUrl: proficionalProjImg5,
      link: "https://www.qubyteinteractive.com/games/bricky-to-me/", 
    },
    {
      title: "Alice in Wonderland - A jigsaw puzzle tale",
      description: "Patch for consoles",
      imgUrl: proficionalProjImg6,
      link: "https://www.qubyteinteractive.com/games/alice-in-wonderland/", 
    },
  ];

  const screenshots = [
    {
      title: "Bricky to Me",
      description: "",
      imgUrl: screenshotImg1,
    },
    {
      title: "Minidungeon",
      description: "",
      imgUrl: screenshotImg9,
    },
    {
      title: "Doomed to Hell",
      description: "",
      imgUrl: screenshotImg2,
    },
    {
      title: "Jitsu Squad",
      description: "",
      imgUrl: screenshotImg3,
    },
    {
      title: "Hidden Shapes Black Skull + Old West",
      description: "",
      imgUrl: screenshotImg4,
    },
    {
      title: "Torrois",
      description: "",
      imgUrl: screenshotImg5,
    },
    {
      title: "Sandalation Adventure",
      description: "",
      imgUrl: screenshotImg6,
    },
    {
      title: "Guardado a sete chaves",
      description: "",
      imgUrl: screenshotImg7,
    },
    {
      title: "Guardado a sete chaves",
      description: "",
      imgUrl: screenshotImg8,
    },
  

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In my career, I have participated in several projects, some acting as the main programmer, others as game designer and screenwriter, within these projects I have worked on personal projects, professional projects, game jams and third party projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Personal</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Professional</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Screenshots</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          personalProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          proficionalProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          screenshots.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row></Tab.Pane>
                  </Tab.Content>

                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
