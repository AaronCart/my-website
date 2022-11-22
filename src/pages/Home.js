import React from 'react';
import { Container, Row, Col, Image, Card, ListGroup, Ratio } from 'react-bootstrap';
import Aaron from '../assets/Aaron.jpg';
import BHSSC from '../assets/bhssc.jpg';
import RMIT from '../assets/rmitCity.jpg';

// Age calculation sourced from https://www.javatpoint.com/calculate-age-using-javascript
var dob = new Date("06/13/2001");
var month_diff = Date.now() - dob.getTime();
var age_dt = new Date(month_diff);
var year = age_dt.getUTCFullYear();
var age = Math.abs(year - 1970);

export default function Home() {

    return (
        <Container fluid className='darkBG'>
            <h1 className='pt-4 text-center'>About Me</h1>
            <Row xs={1} md={2} className='py-4 justify-content-center'>
                <Col md={6} lg={4}>
                    <Image fluid src={Aaron} width={"50%"} className="roundIMG mx-auto d-block" />
                </Col>
                <Col md={6} lg={4} className="px-4 pe-md-4 pe-lg-0 pt-3 pt-md-0">
                    <p>Hi! My name is Aaron Cartledge and I am an aspiring Front End Web/Mobile App Developer.
                        Throughout High School I was unsure about what I wanted to do after Year 12 and whether
                        or not I even wanted to go to a University. After attending many Uni open days and getting
                        a small taste of Uni life, I decided to set my sights on doing a Bachelor of Information
                        Technology at RMIT starting in 2020. And 3 years later I've completed my course and am
                        confident that I have the necessary skills to work with you in the future.</p>
                </Col>
            </Row>

            <h1 className='pt-4 text-center'>Skills & Profile</h1>
            <Row xs={1} md={2} className="justify-content-sm-center m-3">
                <Col className='mb-4'>
                    <Card bg="success">
                        <Card.Header as="h3" className='text-center'>Front End Skills</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item className='listBG'>HTML</ListGroup.Item>
                            <ListGroup.Item className='listBG'>CSS</ListGroup.Item>
                            <ListGroup.Item className='listBG'>Bootstrap</ListGroup.Item>
                            <ListGroup.Item className='listBG'>JavaScript</ListGroup.Item>
                            <ListGroup.Item className='listBG'>ReactJS & React Native</ListGroup.Item>
                            <ListGroup.Item className='listBG'>TypeScript</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col>
                    <Card bg="primary">
                        <Card.Header as="h3" className='text-center'>Profile</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item className='listBG'><span className="listLabel">Age:</span> {age}</ListGroup.Item>
                            <ListGroup.Item className='listBG'><span className="listLabel">Gender:</span> Male</ListGroup.Item>
                            <ListGroup.Item className='listBG'><span className="listLabel">Height:</span> 1.76m</ListGroup.Item>
                            <ListGroup.Item className='listBG'><span className="listLabel">Background:</span> Half
                                Australian Half Korean</ListGroup.Item>
                            <ListGroup.Item className='listBG'><span className="listLabel">Language:</span> English</ListGroup.Item>
                            <ListGroup.Item className='listBG'><span className="listLabel">Location:</span> Melbourne, Australia</ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>

            <h1 className='pt-4 text-center'>Education</h1>
            <Row xs={1} md={2} className="justify-content-around m-3">
                <Col md={5} lg={4} className="mb-4">
                    <Card className='eduBG'>
                        <Ratio aspectRatio="16x9">
                            <Card.Img variant="top" src={BHSSC} />
                        </Ratio>
                        <Card.Body>
                            <Card.Title>High School - <span className="eduLabel">BHSSC Victoria</span></Card.Title>
                            <Card.Text><b><span className="eduLabel">2014-2019</span></b><br />VCE</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5} lg={4}>
                    <Card className='eduBG'>
                        <Ratio aspectRatio="16x9">
                            <Card.Img variant="top" src={RMIT} />
                        </Ratio>
                        <Card.Body>
                            <Card.Title>University - <span className="eduLabel">RMIT Australia</span></Card.Title>
                            <Card.Text><b><span className="eduLabel">2020-2022</span></b><br />Bachelor of IT</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
}