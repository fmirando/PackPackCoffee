import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Landing from './Landing/Landing';
import About from './About/About';
import Contact from './Contact/Contact';
import Gallery from './Gallery/Gallery';
import Packages from './PackagesMenu/Packages';

export default function App() {
  // TODO: Patty, please refactor the routes into their own separate routes file, import them here and map over
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/packages" element={<Packages />} />
      </Routes>
    </div>
  );
}
