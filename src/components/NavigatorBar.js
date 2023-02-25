import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import './styles/navbar.css'

function NavigatorBar(props) {
  return (
    <Navbar expand="lg" className="jb-navbar">
      <Container>
        <Navbar.Brand className="jb-navbar-home" as={Link} to="/home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={props.currentPageNavbar === 1 ? ('jb-navbar-button jb-navbar-button-toggled') : ('jb-navbar-button')} as={Link} to="/page1">Page 1</Nav.Link>
            <Nav.Link className={props.currentPageNavbar === 2 ? ('jb-navbar-button jb-navbar-button-toggled') : ('jb-navbar-button')} as={Link} to="/page2">Page 2</Nav.Link>
            <Nav.Link className={props.currentPageNavbar === 3 ? ('jb-navbar-button jb-navbar-button-toggled') : ('jb-navbar-button')} as={Link} to="/page3">Page 3</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigatorBar;