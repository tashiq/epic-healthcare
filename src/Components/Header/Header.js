import { Container, Nav, Navbar } from "react-bootstrap";
// import { useLocation } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import { HashLink, NavHashLink } from 'react-router-hash-link';
import useAuth from "../../hooks/useAuth";
const Header = () => {
    const { user, logOut } = useAuth();
    // console.log(user);
    // const location = useLocation();
    // console.log(location);
    const logOutHandle = (e) => {
        e.preventDefault();
        logOut();
    }
    document.title = 'Epic Health Care| Home';
    console.log(document);
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="mid-nav">
                <Container>
                    <Navbar.Brand>Epic Health Care
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto def-nav">
                            <NavHashLink className="nav-item" activeClassName="active" to="/home#home" >
                                <span className="nav-icon"><i className="fas fa-home"></i></span>
                                <span className="nav-text">Home</span>
                            </NavHashLink>
                            <NavHashLink className="nav-item" activeClassName="active" to="/home#services">
                                <span className="nav-icon"><i className="fas fa-stethoscope"></i></span>
                                <span className="nav-text">Services</span>
                            </NavHashLink>
                            <NavHashLink className="nav-item" activeClassName="active" to="/map">
                                <span className="nav-icon"><i className="fas fa-map-marker-alt"></i></span>
                                <span className="nav-text">Map</span>
                            </NavHashLink>
                            <NavHashLink className="nav-item" activeClassName="active" to="/doctors">
                                <span className="nav-icon"><i className="fas fa-user-nurse"></i></span>
                                <span className="nav-text">Doctors</span>
                            </NavHashLink>
                            <NavHashLink className="nav-item" activeClassName="active" to="/book">
                                <span className="nav-icon"><i className="fas fa-comment-medical"></i></span>
                                <span className="nav-text">Book a serial</span>
                            </NavHashLink>
                            <NavHashLink className="nav-item" activeClassName="active" to="/faq">
                                <span className="nav-icon"><i className="fas fa-question"></i></span>
                                <span className="nav-text">FAQ</span>
                            </NavHashLink>
                            {
                                !user.email ?
                                    <NavHashLink as={HashLink} to="/login" className="nav-item"><i className="fas fa-sign-in-alt" title="Sign In"></i></NavHashLink>
                                    :
                                    <div className="d-flex nav-item">
                                        <NavHashLink as={HashLink} to="/home" onClick={logOutHandle} className="nav-icon"><i className="fas fa-sign-out-alt" title="Log Out"></i></NavHashLink>
                                        <span className="my-2 text-white nav-text">{user.displayName}</span>
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