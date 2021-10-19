import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand>Epic Health Care</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#faq">FAQ</Nav.Link>
                            <Nav.Link as={HashLink} to="/login"><i className="fas fa-sign-in-alt" title="Sign In"></i></Nav.Link>
                            <Nav.Link as={HashLink} to="/home"><i className="fas fa-sign-out-alt" title="Log Out"></i></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;