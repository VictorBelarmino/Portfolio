import {Col, Nav} from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link}) =>{
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br></br>
                    <br></br>
                    <div>
                        {(() => {
                            if (link != null) {
                                return (
                                    <Nav className="projcard-imgbx"  variant="pills">
                                        <Nav.Link href={link} target="_blank" >Go to the page</Nav.Link>
                                    </Nav>
                                )
                            }
                        })()}
                    </div>
               
                </div>
            </div>
        </Col>
    )
}