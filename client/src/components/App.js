import React from 'react';
import Container from 'react-bootstrap/Container';
import bg from '../images/bg2.jpg';

export default ({ children }) => {
  return (
    <Container style={styles} fluid={true}>
      {children}
    </Container>
  );
};

const styles = {
   backgroundImage: `url(${bg})`,
   height: '100vh',
   width: '100vw',
   padding: '0',
   position: 'absolute'
};
