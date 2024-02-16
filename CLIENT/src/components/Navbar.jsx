// Navbar component that will remain sticky on top of every page
// Navbar should contain PackPack logo/name, and the following tabs: About, Contact, Gallery, and Packages
// Note that "Landing" component should not be included as a tab but rather the user can click on the name/logo and will be directed to landing page
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="title">PackPack Coffee</Link>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/packages">Packages</NavLink>
        </li>
      </ul>
    </nav>
  );
}
