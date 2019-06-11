import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import bg from '../images/bg2.jpg';

export default class App extends Component {
   render() {
      return (
         <Container style={styles} fluid={true}>
            {this.props.children}
         </Container>
      );
   }

};

const styles = {
   backgroundImage: `url(${bg})`,
   height: '100vh',
   width: '100vw',
   padding: '0',
   position: 'absolute'
};
