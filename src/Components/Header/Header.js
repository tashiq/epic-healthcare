import { Container, Nav, Navbar, Spinner } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import useAuth from "../../hooks/useAuth";
const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    const logOutHandle = (e) => {
        e.preventDefault();
        logOut();
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="container" style={{ height: "50px" }}>
                <Container>
                    <Navbar.Brand>Epic Health Care</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#map">Map</Nav.Link>
                            <Nav.Link as={HashLink} to="/doctors">Doctors</Nav.Link>
                            <Nav.Link as={HashLink} to="/book">Book a serial</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#faq">FAQ</Nav.Link>
                            {
                                !user.email ?
                                    <Nav.Link as={HashLink} to="/login"><i className="fas fa-sign-in-alt" title="Sign In"></i></Nav.Link>
                                    :
                                    <div className="d-flex">
                                        <span className="m-2 text-white">{user.displayName}</span>
                                        <Nav.Link as={HashLink} to="/home" onClick={logOutHandle}><i className="fas fa-sign-out-alt" title="Log Out"></i></Nav.Link>
                                    </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;