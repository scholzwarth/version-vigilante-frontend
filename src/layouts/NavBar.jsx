import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import vigilante from 'src/assets/images/vigilante.png';

const NavBar = () => {
  return (
    <Navbar variant="primary-app" expand="md" className="sticky-top">
      <Container fluid className="mx-md-3">
        <Navbar.Brand as={NavLink} to="/" end className="align-items-center d-flex flex-column">
          <img src={vigilante} style={{ width: '50px' }} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="mr-3">
          <Nav className="w-100 justify-content-end pt-3 pt-md-0">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/projects" end>Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;