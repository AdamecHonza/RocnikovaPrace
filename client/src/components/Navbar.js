import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavigationBar() {
  return (
    <Navbar sticky="top" className="navbar" bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#cards">Concerts</Nav.Link>
          <Nav.Link href="#hero">Back to top</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
