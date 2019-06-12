import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// slides
import hi from '../images/hi.png';
import imt from '../images/imt.png';
import mern from '../images/mern-stack.png';
import iaut from '../images/iaut.png';
import otech from '../images/other-tech.png';
import dbeez from '../images/dbeez1.png';
import ubuntu from '../images/ubuntu_logo.png';
import lms from '../images/lms.png';
import blank from '../images/blank.png';

class WelcomeCarousel extends Component {
   render() {
      return(
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
                  <h3>Ubuntu 16.04, 18.04, 18.10 x64</h3>
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
      );
   }
}

export default WelcomeCarousel;
