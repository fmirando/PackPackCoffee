import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.modules.css';

function NavBar() {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <div className={styles.navbarContent}>
        <Navbar.Brand as={NavLink} to="/" className={styles.navbarBrand}>PackPack</Navbar.Brand>
        <Nav className={`${styles.navLink} ${styles.navbarLinks}`}>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          <Nav.Link as={NavLink} to="/gallery">Gallery</Nav.Link>
          <Nav.Link as={NavLink} to="/packages">Packages</Nav.Link>
        </Nav>
        <Nav className={styles.navLink}>
          <Nav.Link as={NavLink} to="/quotes">BOOK US TODAY!</Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
}

export default NavBar;
