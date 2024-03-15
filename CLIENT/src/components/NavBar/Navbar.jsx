import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from "./NavBar.modules.css";


const NavBar = () => {
  return (
    <Navbar expand="lg" className={styles.navbar}>
    <Container className={styles.navbarContainer}>
      <Navbar.Brand as={NavLink} to="/">PackPack</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/about" className={styles.navLink}>
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" className={styles.navLink}>
            Contact
          </Nav.Link>
          <Nav.Link as={NavLink} to="/gallery" className={styles.navLink}>
            Gallery
          </Nav.Link>
          <Nav.Link as={NavLink} to="/packages" className={styles.navLink}
          >Packages
          </Nav.Link>
        </Nav> 
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavBar;
