import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import './Welcome.css';
import name from '../images/name2.png';
import mern from '../images/mern-stack.png';
import otech from '../images/other-tech.png';
import dbeez from '../images/dbeez1.png';
import ubuntu from '../images/ubuntu_logo.png';
import lms from '../images/lms.png';
import imt from '../images/imt.png';
import iaut from '../images/iaut.png';
import hi from '../images/hi.png';
import blank from '../images/blank.png';
import stats from '../images/graph.jpg';
import react_cert from '../images/react-redux_cert.jpg';

class Welcome extends Component {
   render() {
      return (
         <div>
            <Header />
            <Container id="welcome">
               <Row className="justify-content-md-center">
                  <Col xs className="column">
                     <Row className="justify-content-md-center">
                        <Col xs md={8}>
                           <Image src={name} style={image_styles} fluid={true} />
                        </Col>
                     </Row>
                     
                     <Carousel controls={false} fade={true} indicators={false} pauseOnHover={false} interval={3500}>
                        
                        <Carousel.Item className="w-100">
                           <img
                              src={hi}
                              alt="Hi."
                           />
                           <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        
                        <Carousel.Item className="w-100">
                           <img
                              src={imt}
                              alt="I made this..."
                           />
                           <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item className="w-100">
                           <img
                              src={mern}
                              alt="This website made in MERN"
                           />
                           <Carousel.Caption>
                              <h3>MongoDB,&nbsp;&nbsp;&nbsp;&nbsp;Express,&nbsp;&nbsp;&nbsp;&nbsp;ReactJS,&nbsp;&nbsp;&nbsp;&nbsp;NodeJS</h3>
                              <h3>... I used the MERN stack.</h3>
                           </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item className="w-100">
                           <img
                              src={iaut}
                              alt="I also use these..."
                           />
                           <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item className="w-100">
                           <img
                              src={otech}
                              alt="Clientside technologies"
                           />
                           <Carousel.Caption>
                              <h3>AngularJS,&nbsp;&nbsp;&nbsp;JavaScript,&nbsp;&nbsp;&nbsp;Bootstrap,&nbsp;&nbsp;&nbsp;Jquery</h3>
                           </Carousel.Caption>
                        </Carousel.Item>
                        
                        {/* <Carousel.Item className="w-100">
                           <img
                              src={blank}
                              alt="blank"
                           />
                           <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item> */}

                        <Carousel.Item className="w-100">
                           <img
                              src={dbeez}
                              alt="Database technologies"
                           />
                           <Carousel.Caption>
                              <h3>&nbsp;&nbsp;&nbsp;&nbsp;MySQL,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MongoDB</h3>
                           </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item className="w-100">
                           <img
                              src={ubuntu}
                              alt="Database technologies"
                           />
                           <Carousel.Caption>
                              <h3>I work with Ubuntu 16.04.5 x64 with "Let's Encrypt"</h3>
                           </Carousel.Caption>
                        </Carousel.Item>
                        
                        {/* <Carousel.Item className="w-100">
                           <img
                              src={blank}
                              alt="blank"
                           />
                           <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item> */}

                        <Carousel.Item className="w-100">
                           <img
                              src={lms}
                              alt="Let's make something..."
                           />
                           <Carousel.Caption>
                              <h1>... make a difference.</h1>
                           </Carousel.Caption>
                        </Carousel.Item>
                        
                        <Carousel.Item className="w-100">
                           <img
                              src={blank}
                              alt="blank"
                           />
                           <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>

                     </Carousel>
                  </Col>
               </Row>
               <Row>

               </Row>
            </Container>

            <Container id="stats">
               <Row className="justify-content-md-center">
                  <Col xs className="column">
                     <Image src={stats} style={image_styles} fluid={true} />
                  </Col>
               </Row>
            </Container>

            <Container id="school">
               <Row className="justify-content-md-center">
                  <Col xs className="column">
                     <Row>
                        <Col xs md={7}>
                           <h2 style={head_font}>Udemy Classes</h2>
                           <p style={work_style}>Programmng Tutorials</p>
                           <ul style={work_style}>
                              <li>Advanced React and Redux: 2018 Edition</li>
                              <li>Angular 8 (formerly Angular 2) - The Complete Guide</li>
                              <li>React Native: Advanced Concepts</li>
                           </ul>
                        </Col>
                        <Col xs md={4}>
                           <Image src={react_cert} style={image_styles} fluid={true} />
                        </Col>
                     
                     </Row>
                     <Row className="justify-content-md-center">
                        <Col xs>
                           <h2 style={head_font}>Kaplan University</h2>
                           <p style={work_style}>Information Systems</p>
                           <h4 style={head_font}>2009 - 2013</h4>
                           <p style={work_style}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I went to college between working at my first programming job and the second. This focused a lot on networks but did give me C#, VB, Java, MS Sql, HTML5, project management and human relations courses. Oh and a very large bill. :)</p>
                        </Col>
                     </Row>
                  </Col>
               </Row>
            </Container>

            <Container id="work">
               <Row className="justify-content-md-center">
                  <Col xs className="column">
                     <Row>
                        <Col xs md={6}>
                           <h2 style={head_font}>Process Management Systems:</h2>
                           <p style={work_style}>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Business process management (BPM) is a discipline involving any combination of modeling, automation, execution, control, measurement and optimization of business activity flows, in support of enterprise goals, spanning systems, employees, customers and partners within and beyond the enterprise boundaries.
                           </p>
                        </Col>
                        <Col xs md={3}>
                           <ul style={work_style}>Technologies:
                              <li>Git</li>
                              <li>npm</li>
                              <li>Angular JS</li>
                              <li>Node JS</li>
                              <li>VBA/Access/Excel</li>
                              <li>HTML5, XHTML</li>
                              <li>CSS3, SCSS</li>
                              <li>Bootstrap 3 and 4</li>
                           </ul>
                        </Col>
                        <Col xs md={3}>
                        <ul style={work_style}>&nbsp;
                              <li>Javascript/ES6</li>
                              <li>TamperMonkey</li>
                              <li>Knockout JS</li>
                              <li>Ajax</li>
                              <li>C#/VB</li>
                              <li>MySQL</li>
                              <li>Linux Ubuntu</li>
                              <li>AutoIT</li>
                           </ul>
                        </Col>
                     </Row>
                     <Row>
                        <Col xs>
                           <h4 style={head_font}>2004 - 2009,&nbsp;&nbsp;&nbsp;2013 - 2018</h4>
                           <p style={work_style}>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The first BPM was for a recycling company's work flow. The system was a cobination of C# Windows forms and AutoIT scripts which took data from mechanical devices, scales and barcodes. Data collected was stored in a MS SQL database.
                           </p>
                           <p style={work_style}>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After College, the second BPM programming team used a MEAN stack, MySQL, Express, Angular JS, Node JS. This BPM was a single page web app that required authorization, sockets, locks, tables and forms
                           </p>
                           <p style={work_style}>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Node JS was also used to create web scapers to collect orders from the clients that provided web portals to them. Console apps, API servers and Email scrapers were also built in Node JS.
                           </p>
                        </Col>
                     </Row>
                  </Col>
               </Row>
               
            </Container>
            
            <Container id="examples">
               <Row className="justify-content-md-center">
                  <Col xs className="column">
                     <Row>
                        <Col xs><div dangerouslySetInnerHTML={{ __html: this.props.getRepos('eldis-app') }} /></Col>
                     </Row>
                  </Col>
               </Row>
            </Container>
         </div>
      );
   }
   
};

const image_styles = {
   margin: '5% 0'
};

const work_style = {
   fontSize: '1.75em'
};

const head_font = {
   color: 'lime'
};

export default connect(null, actions)(Welcome);
