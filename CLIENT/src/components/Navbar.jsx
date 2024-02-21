// Navbar component that will remain sticky on top of every page
// Navbar should contain PackPack logo/name, and the following tabs: About, Contact, Gallery, and Packages
// Note that "Landing" component should not be included as a tab but rather the user can click on the name/logo and will be directed to landing page
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <NavLink to="/" className="navbar-brand title">PackPack Coffee</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
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
      </div>
    </nav>
  );
}
