import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function NavigationBar() {
  return (
    <Navbar expand="lg" className="book-navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Book Finder
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarColor03" />

        <Navbar.Collapse id="navbarColor03">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Explore
            </Nav.Link>

            <Nav.Link as={Link} to="/favorites">
              Reading List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar