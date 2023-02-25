import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import '../styles/sidebar.css';

export default function MiniNavbar(props){
    return (
        <Navbar expand="lg" className="jb-mininavbar">
        <Container>
        <Button variant="primary" onClick={props.animateSidebar}>Hide Sidebar</Button>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link className="jb-general-text" href="#option1">Option 1</Nav.Link>
            <Nav.Link className="jb-general-text" href="#option2">Option 2</Nav.Link>
            <NavDropdown title="Option 3" className="jb-general-text" id="basic-nav-dropdown">
                <NavDropdown.Item className="jb-general-text" href="#3action1">Action 1</NavDropdown.Item>
                <NavDropdown.Item className="jb-general-text" href="#3action2">Action 2</NavDropdown.Item>
                <NavDropdown.Item className="jb-general-text" href="#3action3">Action 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="jb-general-text" href="#3action4">Action 4</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="jb-general-text" href="#option2">Option 4</Nav.Link>
            <Nav.Link className="jb-general-text" href="#option2">Option 5</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}