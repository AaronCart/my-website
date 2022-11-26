import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import CommSec from '../assets/CommSec.png';
import VibeCheck from '../assets/VibeCheck.png';
import ReactLogo from '../assets/ReactLogo.png';
import PHPLogo from '../assets/PHP.png';
import VoteLogo from '../assets/VoteLogo.png';
import GitHubLogo from '../assets/GitHub.png';
import ABC from '../assets/ABC.png';
import AEM from '../assets/AEM.png';

export default function Portfolio() {

    return (
        <Container fluid className='darkBG'>

            <h1 className='pt-4 text-center'>Portfolio</h1>
            <h5 className='text-center'>This website was made with ReactJS and Bootstrap 5 and was deployed using Netlify.<br />
                Here are some other websites and apps I have worked on during my time at RMIT.</h5>

            <Row sm={1} md={2} className="justify-content-center mt-5">
                <Col md={5} lg={4}>
                    <Image fluid src={CommSec} width={"75%"} className="roundIMG mx-auto mx-md-0 d-block"></Image>
                </Col>
                <Col md={5} lg={4} className="text-center text-md-start mt-4 mt-md-0">
                    <h5 className='eduLabel'>WEB DEVELOPMENT</h5>
                    <h3>CommSec Copy</h3>
                    <p>A CommSec Login Clone (JavaScript & PHP)</p>
                    <Button className="btnLink" size="lg" href="https://aaron-cart.000webhostapp.com/CommSec-Copy/"
                        target="_blank">View Demo</Button>
                </Col>
            </Row>

            <Row sm={1} md={2} className="justify-content-center mt-5 pt-md-5">
                <Col md={{ span: 5, order: 'last' }} lg={4}>
                    <Image fluid src={VibeCheck} width={"75%"} className="roundIMG mx-auto mx-md-0 d-block"></Image>
                </Col>
                <Col md={{ span: 5, order: 'first' }} lg={4} className="text-center text-md-start mt-4 mt-md-0">
                    <h5 className='eduLabel'>WEB DEVELOPMENT</h5>
                    <h3>Vibe Check</h3>
                    <p>Basic Social Media Website (ReactJS & Bootstrap 4)</p>
                    <Button className="btnLink" size="lg" href="https://aaron-a1.netlify.app/" target="_blank">View Website</Button>
                </Col>
            </Row>

            <Row sm={1} md={2} className="justify-content-center mt-5 pt-md-5">
                <Col md={5} lg={4}>
                    <Image fluid src={ReactLogo} width={"75%"} className="roundIMG mx-auto mx-md-0 d-block"></Image>
                </Col>
                <Col md={5} lg={4} className="text-center text-md-start mt-4 mt-md-0">
                    <h5 className='eduLabel'>WEB DESIGN</h5>
                    <h3>ReactJS Form</h3>
                    <p>Save User Input in LocalStorage (ReactJS & Bootstrap 4)</p>
                    <Button className="btnLink" size="lg" href="https://aaron-a3.netlify.app/" target="_blank">View Demo</Button>
                </Col>
            </Row>

            <Row sm={1} md={2} className="justify-content-center mt-5 pt-md-5">
                <Col md={{ span: 5, order: 'last' }} lg={4}>
                    <Image fluid src={PHPLogo} width={"75%"} className="roundIMG mx-auto mx-md-0 d-block"></Image>
                </Col>
                <Col md={{ span: 5, order: 'first' }} lg={4} className="text-center text-md-start mt-4 mt-md-0">
                    <h5 className='eduLabel'>WEB DEVELOPMENT</h5>
                    <h3>Shopping Cart</h3>
                    <p>Basic Shopping Cart - Back-End (PHP)</p>
                    <Button className="btnLink" size="lg" href="https://aaron-cart.000webhostapp.com/Shopping-Cart/"
                        target="_blank">View Website</Button>
                </Col>
            </Row>

            <Row sm={1} md={2} className="justify-content-center mt-5 pt-md-5">
                <Col md={5} lg={4}>
                    <Image fluid src={VoteLogo} width={"75%"} className="roundIMG mx-auto mx-md-0 d-block"></Image>
                </Col>
                <Col md={5} lg={4} className="text-center text-md-start mt-4 mt-md-0">
                    <h5 className='eduLabel'>WEB DESIGN</h5>
                    <h3>Voting System</h3>
                    <p>Basic Front-End Voting System (JavaScript - Addressfinder API)</p>
                    <Button className="btnLink" size="lg" href="https://aaron-cart.000webhostapp.com/Election/"
                        target="_blank">View Demo</Button>
                </Col>
            </Row>

            <Row sm={1} md={2} className="justify-content-center mt-5 pt-md-5">
                <Col md={{ span: 5, order: 'last' }} lg={4}>
                    <Image fluid src={ABC} width={"75%"} className="roundIMG mx-auto mx-md-0 d-block"></Image>
                </Col>
                <Col md={{ span: 5, order: 'first' }} lg={4} className="text-center text-md-start mt-4 mt-md-0">
                    <h5 className='eduLabel'>WEB DEVELOPMENT</h5>
                    <h3>Adrenaline Buzz Club</h3>
                    <p>Fitness Tracking Website (PHP)</p>
                    <Button className="btnLink" size="lg" href="https://jupiter.csit.rmit.edu.au/~s3840848/wp/a2/index.php"
                        target="_blank">View Website</Button>
                </Col>
            </Row>

            <Row sm={1} md={2} className="justify-content-center mt-5 pt-md-5">
                <Col md={5} lg={4}>
                    <Image fluid src={AEM} width={"75%"} className="roundIMG mx-auto mx-md-0 d-block"></Image>
                </Col>
                <Col md={5} lg={4} className="text-center text-md-start mt-4 mt-md-0">
                    <h5 className='eduLabel'>MOBILE APP DEVELOPMENT</h5>
                    <h3>AEM Plus</h3>
                    <p>Full Stack Developer for AEM Algorithm's Cryptocurrency Wallet App for final project at RMIT</p>
                    <Row sm={2} className="justify-content-center">
                        <Col sm={5}>
                            <Button className="btnLink" size="lg" href="https://www.aemalgorithm.io/aem-plus/main"
                                target="_blank">AEM Plus</Button>
                        </Col>
                        <Col sm={5}>
                            <Button className="btnLink mt-3 mt-sm-0" size="lg" href="https://www.linkedin.com/posts/aem-algorithm_rmituniversity-rmitblockchain-activity-6991602309436755968-7Y8O?utm_source=share&utm_medium=member_desktop"
                                target="_blank">LinkedIn Post</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row sm={1} md={2} className="justify-content-center mt-5 pt-md-5 mb-5">
                <Col md={{ span: 5, order: 'last' }} lg={4}>
                    <Image fluid src={GitHubLogo} width={"75%"} className="roundIMG mx-auto mx-md-0 d-block"></Image>
                </Col>
                <Col md={{ span: 5, order: 'first' }} lg={4} className="text-center text-md-start mt-4 mt-md-0">
                    <h5 className='eduLabel'>CODE FILES</h5>
                    <h3>GitHub Repositories</h3>
                    <p>Code Files for all websites and other projects</p>
                    <Button className="btnLink" size="lg" href="https://github.com/AaronCart?tab=repositories"
                        target="_blank">View Repositories</Button>
                </Col>
            </Row>
        </Container>
    );
}