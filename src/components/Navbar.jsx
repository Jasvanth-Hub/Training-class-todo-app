import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#">Hello there ...</Navbar.Brand>
        <Nav>
          <Nav.Link style={{color:"white"}}  href= "/" >Home</Nav.Link>
          <Nav.Link style={{color:"white"}}  href="/about">About</Nav.Link>
          <Nav.Link style={{color:"white"}}  href="/contact">Contact Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
