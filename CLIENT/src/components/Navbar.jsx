import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';

// TODO: Need to add button for "Book Us Today!"
export default function Navbar() {
  return (
    <Nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <Container className="container">
        <div className="d-flex justify-content-between w-100"> {/* Wrap brand and toggle button inside a flex container */}
          <NavLink to="/" className="navbar-brand title">PackPack Coffee</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        {/* TODO: Refactor using Bootstrap Container instead of list */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink exact to="/about" className="nav-link" activeClassName="active">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/gallery" className="nav-link" activeClassName="active">Gallery</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/packages" className="nav-link" activeClassName="active">Packages</NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </Nav>
  );
}
