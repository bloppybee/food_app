import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { assets } from '../../Assests/assets/frontend_assets/assets'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


function NavScrollExample({ setShowLogin }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><img src={assets.logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/"end className={({ isActive }) => isActive ? "fw-bold text-success" : ""}>
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/menu" className={({ isActive }) => isActive ? "fw-bold text-success" : ""}>
              Menu
            </Nav.Link>

            <Nav.Link as={NavLink} to="/mobile-app" className={({ isActive }) => isActive ? "fw-bold text-success" : ""}>
              Mobile App
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contact" className={({ isActive }) => isActive ? "fw-bold text-success" : ""}>
              Contact Us
            </Nav.Link>
          </Nav>

          <Form className=" d-flex align-items-center gap-3">
            <Form.Control

              type="search"
              placeholder="Search"
              size="sm"
              className="rounded-pill px-2 w-auto" />

            <Button size='sm' className='rounded px-3' variant="outline-success"><img src={assets.search_icon} width="14" alt="" /></Button>
            <Button onClick={() => setShowLogin(true)} size='sm' className='rounded-pill bg-none px-3' variant="outline-success">sign in</Button>
            <Link to='/cart'><Button size='sm' className='rounded px-3' variant="outline-success"><img src={assets.basket_icon} width="14" alt="" /></Button></Link>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;