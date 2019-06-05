import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../components/Header.css';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <Nav>
          <Link to="/signout"><Button variant="dark">Sign Out</Button></Link>
          <Link to="/feature"><Button variant="dark">Feature</Button></Link>
        </Nav>
      );
    } else {
      return (
        <Nav>
          <Nav.Link href="/signup">Register</Nav.Link>
          <Nav.Link href="/signin">Sign In</Nav.Link>
        </Nav>
      );
    }
  }

  render() {
    return (
      <Container fluid={true} style={container_style}>
         <Navbar variant="black" expand="lg" style={navbar_style} fixed="top">
            <Navbar.Brand href="#welcome">&lt;eldis /&gt;</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-between" id="basic-navbar-nav">
               <Nav style={nav_style}>
                  <Nav.Link href="#stats">Stats</Nav.Link>
                  <Nav.Link href="#school">School</Nav.Link>
                  <Nav.Link href="#work">Work</Nav.Link>
                  <Nav.Link href="#fun">Fun</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
               </Nav>
               {this.renderLinks()}
            </Navbar.Collapse>
         </Navbar>
      </Container>

    );
  }
}

const container_style = {
   padding: '0'
};

const nav_style = {
   paddingLeft: '20%',
   minWidth: '50%'
};

const navbar_style = {
   paddingLeft: '50px',
   paddingRight: '50px'
};

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
