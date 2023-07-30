import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom'

export default function NavigationBarReserve() {
  return (
   <Navbar sticky="top" className="navbar" bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
       <Nav.Link href="/">Go back</Nav.Link>  
        </Nav>
      </Container>
    </Navbar>
  );
}
