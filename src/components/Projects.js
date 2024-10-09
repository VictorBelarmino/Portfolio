import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

//Personal Portifolio images
import bananitroImg from "../assets/img/personal-projects/Bananitro.png";
import doomedToHellImg from "../assets/img/personal-projects/Doomed to Hell.png";
import sensatosImg from "../assets/img/personal-projects/Sensatos.png";
import miniDungeonImg from "../assets/img/personal-projects/Mini Dungeon.png";
import raidersOfValhallaImg from "../assets/img/personal-projects/Raiders of Valhalla.png";
import railwayIslandsImg from "../assets/img/personal-projects/Railway Islads.png";
import jitsuSquadImg from "../assets/img/personal-projects/Jitsu Squad.png";
import diceAssassinImg from "../assets/img/personal-projects/Dice Assasin.png";
import kitingCatImg from "../assets/img/personal-projects/Kiting Cat.png";

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
      title: "Raiders of Valhalla (Game Designer)",
      description: "As game designer, I wrote the complete GDD and developed essential systems such as the mission, skills, and forge systems. I also scripted the story, balanced the gameplay, and worked on implementing strategic mechanics inspired by the auto-battle genre.",
      imgUrl: raidersOfValhallaImg,
      link: "https://store.steampowered.com/app/2298620/Raiders_of_Valhalla/", 
    },
    {
      title: "Dice Assassin (Game Designer)",
      description: "I was responsible for the design and balancing of the gameplay systems, combining dice-based mechanics with tactical movement and card-based actions. My work involved creating a strategic flow for the use of action cards, as well as designing enemy mechanics and dynamic combat encounters.",
      imgUrl: diceAssassinImg,
      link: "https://store.steampowered.com/app/2573470/Dice_Assassin/", 
    },
    {
      title: "Kiting Cat (Game Designer)",
      description: "I created the concept from start to finish for this Sokoban-style game that blends the genre with elements of Overcooked. The player’s objective is to combine ingredients by pushing a cart around the map to ultimately create recipes and deliver them to customers. I was the game designer on this project and developed all the levels, concepts, and mechanics.",
      imgUrl: kitingCatImg,
      link: "", 
    },
    {
      title: "Bananitro (Game Designer and Programmer)",
      description: "Bananitro is a game I developed with friends for the Monkey Jam 2024, where it won first place. Currently, I am working on launching it on Steam as both Game Designer and Programmer. This project allowed me to showcase my skills in game design and programming while collaborating with a talented team to create a fun and engaging experience for players.",
      imgUrl: bananitroImg,
      link: "https://store.steampowered.com/app/3141340/Bananitro/", 
    },
    {
      title: "Mini Dungeon (Game Designer)",
      description: "A Unity project where I serve as the Game Designer. In this game, you play as an adventurer from the Mini Guild, tasked with cataloging various biomes, materials, weapons, and monsters. Completing the notebook unlocks forbidden areas filled with great dangers and rewards.",
      imgUrl: miniDungeonImg,
      link: "https://store.steampowered.com/app/3076740/Mini_Dungeon/", 
    },
    {
      title: "Sensato's (Game Designer, Screenwriter)" ,
      description: "A 2D shooting and stealth game developed in Unity where I serve as the Game Designer. In this top-down game, you take control of Jonas, a talented detective who goes above and beyond to solve his cases.",
      imgUrl: sensatosImg,
      link: "https://didiei3.itch.io/sensatos-invasao-a-colmeia-demo", 
    },
    {
      title: "Railway Islands Puzzle (Porting Programmer)",
      description: "I ported Railway Islands to consoles, which presented challenges as I had to configure the server for user-generated content (UGC) on each of the three platforms: PlayStation, Xbox, and Switch, in addition to working with multithreading in Unity.",
      imgUrl: railwayIslandsImg,
      link: "https://www.qubyteinteractive.com/games/Railway-Islands/", 
    },
    {
      title: "Doomed to Hell (Porting Programmer)",
      description: "I ported Doomed to Hell to PlayStation, Xbox, and Nintendo Switch. In this action-packed roguelike top-down shooter, players control Rose, battling through hordes of monsters and various biomes to escape hell. My work involved adapting the game for each platform while ensuring a seamless experience for players.",
      imgUrl: doomedToHellImg,
      link: "https://www.qubyteinteractive.com/games/doomed-to-hell/", 
    },
    {
      title: "Jitsu Squad (Porting Programmer)",
      description: "I ported Jitsu Squad to PS5, optimizing performance and enhancing the gameplay experience. This included improving graphics, controls, and loading times while maintaining the game's vibrant charm. This project further developed my skills in adapting games for new platforms, ensuring smooth and engaging battles for players.",
      imgUrl: jitsuSquadImg,
      link: "https://store.playstation.com/pt-br/product/UP8012-CUSA36310_00-JITSUSQUADPS4USX", 
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
          <Col size={24}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In my career, I have worked as a Game Designer on various projects, taking on the primary role of designer. I have separated some projects where I contributed and provided a brief overview of my experience in each. The majority of these projects involved my role as Game Designer, but in some, I also served as a programmer.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
