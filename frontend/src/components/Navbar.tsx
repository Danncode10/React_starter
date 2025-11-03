import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';

const Navbar: React.FC = () => {
  return (
    <BSNavbar bg="light" expand="lg" className="shadow-md">
      <Container>
        <BSNavbar.Brand as={Link} to="/" className="text-lg font-bold text-gray-800">
          ReactViteApp
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-gray-600 hover:text-gray-900 px-3 py-2">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2">
              About
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
