import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Phone from '../assets/Phone.png';
import Email from '../assets/mail.png';
import Location from '../assets/Location.png';
import LinkedIn from '../assets/linkedin.png';

export default function Contact() {

    return (
        <Container fluid className='darkBG'>
            <h1 className='pt-4 text-center'>Contact Me</h1>
            <Row sm={1} md={2} xl={4} className="justify-content-center mt-5 mb-5">
                <Col md={5} xl={3}>
                    <Card className='eduBG text-center py-3'>
                        <Card.Body>
                            <Image fluid src={Email} width={"13%"} className="roundIMG text-center mb-2"></Image>
                            <Card.Title as="h5">aaronemail147@gmail.com</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5} xl={3} className="text-center text-md-start mt-4 mt-md-0">
                    <Card className='eduBG text-center py-3'>
                        <Card.Body>
                            <Image fluid src={Phone} width={"13%"} className="roundIMG text-center mb-2"></Image>
                            <Card.Title>+61 433 171 636</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5} xl={3} className="text-center text-md-start mt-4 mt-xl-0">
                    <Card className='eduBG text-center py-3'>
                        <Card.Body>
                            <Image fluid src={LinkedIn} width={"13%"} className="roundIMG text-center mb-2"></Image>
                            <Card.Title><a className="links" href="https://www.linkedin.com/in/aaron-cartledge/" target="_blank"
                                rel="noreferrer">LinkedIn Profile</a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5} xl={3} className="text-center text-md-start mt-4 mt-xl-0">
                    <Card className='eduBG text-center py-3'>
                        <Card.Body>
                            <Image fluid src={Location} width={"13%"} className="roundIMG text-center mb-2"></Image>
                            <Card.Title>Melbourne, Australia</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}