import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
    const formInitialDetail = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetail);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
            "Content-Type": "Application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails)
        });
        setButtonText("Send");
        let result = response.json();
        setFormDetails(formInitialDetail);
        if(result.code === 200){
            setStatus({success: true, message: 'Message send successfully'})
        } else{
            setStatus({success: false, message: 'Something went wrongm, please try again later'})
        }
    };

    return(
        
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us"/>
                    </Col>

                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form action="https://getform.io/f/1381128c-8eff-4a8e-8401-97a07af83ecf" method="POST">
                        <Col>
                            <label>
                                Name
                                <input type='text' name='name'/>
                            </label>

                            <label>
                                Email
                                <input type='email' name='email'/>
                            </label>

                            <Row>
                                <label>
                                    Subject
                                    <input type='text' name='subject' />
                                    </label>
                                <label>
                                    Message
                                    <textarea name='message' rows='5' />
                                </label>
                            </Row>
                           
                            </Col>
                            <button type="submit"><span>{buttonText}</span></button>
                        </form>
                        {/* <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>

                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>

                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>

                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>

                                <Col>
                                    <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form> */}
                    </Col>
                </Row>
            </Container>
        </section>    
    )
}