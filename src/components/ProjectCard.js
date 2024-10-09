import {Col, Nav} from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link}) =>{
    return(
        <Col sm={6} md={4}>
            <img src={imgUrl}/>
            <div class="card-body">
                <h5>{title}</h5>
                <span>{description}</span>
                <br></br>
                <br></br>
                <Nav className="projcard-imgbx"  variant="pills">
                    <Nav.Link href={link} target="_blank" >View More</Nav.Link>
                </Nav>
                <br></br>
                <br></br>
            </div>
        </Col>
    )
}